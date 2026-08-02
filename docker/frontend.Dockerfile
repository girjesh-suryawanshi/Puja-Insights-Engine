# Use Node 24 Alpine for building
FROM node:24-alpine AS base

# Install pnpm for dependency management
RUN npm install -g pnpm

# Set working directory
WORKDIR /app

# Copy root configurations
COPY package.json pnpm-workspace.yaml pnpm-lock.yaml tsconfig.base.json ./

# Add build arguments for Vite
ARG VITE_PORT=4009
ARG BASE_PATH=/
ENV VITE_PORT=$VITE_PORT
ENV BASE_PATH=$BASE_PATH

# Copy libraries
COPY lib/ ./lib/


# Copy the frontend artifact
COPY artifacts/vedic-puja/ ./artifacts/vedic-puja/

# Delete lockfile so pnpm regenerates it fresh from pnpm-workspace.yaml
# (pnpm-workspace.yaml already has esbuild in onlyBuiltDependencies)
RUN rm -f pnpm-lock.yaml && pnpm install

# Build the frontend application
# vite build --config vite.config.ts
WORKDIR /app/artifacts/vedic-puja
RUN pnpm run build

# --- Static Content Delivery with Nginx ---
FROM nginx:alpine AS runner

# Remove default static files
RUN rm -rf /usr/share/nginx/html/*

# Copy built frontend assets from the base image
# First, copy the standard build output
COPY --from=base /app/artifacts/vedic-puja/dist/ /usr/share/nginx/html/

# Explicitly copy the public folder contents to ensure SEO files are in the root
# (In case the build tool put them in a subdirectory)
COPY --from=base /app/artifacts/vedic-puja/public/ /usr/share/nginx/html/

# Copy custom Nginx configuration (which we'll create next)
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

# Expose HTTP port
EXPOSE 80

# Metadata
CMD ["nginx", "-g", "daemon off;"]
