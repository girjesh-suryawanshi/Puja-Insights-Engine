# Use Node 24 Alpine for a smaller footprint
FROM node:24-alpine AS base

# Install pnpm for dependency management
RUN npm install -g pnpm

# Set working directory
WORKDIR /app

# Copy root configurations
COPY package.json pnpm-workspace.yaml pnpm-lock.yaml ./

# Copy libraries first (dependencies)
COPY lib/ ./lib/

# Copy the API server package
COPY artifacts/api-server/ ./artifacts/api-server/

# Delete lockfile so pnpm regenerates it fresh from pnpm-workspace.yaml
# (pnpm-workspace.yaml already has esbuild in onlyBuiltDependencies)
RUN rm -f pnpm-lock.yaml && pnpm install

# Build the API server
# This runs node build.mjs which bundles the app into artifacts/api-server/dist
WORKDIR /app/artifacts/api-server
RUN pnpm run build

# --- Production Runtime Image ---
FROM node:24-alpine AS runner

WORKDIR /app

# Copy pnpm again for the runner
RUN npm install -g pnpm

# Copy built application and necessary workspace files
COPY --from=base /app/package.json /app/pnpm-workspace.yaml /app/pnpm-lock.yaml ./
COPY --from=base /app/artifacts/api-server/package.json ./artifacts/api-server/
COPY --from=base /app/artifacts/api-server/dist ./artifacts/api-server/dist
COPY --from=base /app/lib ./lib

# Install only production dependencies for the API server
WORKDIR /app/artifacts/api-server
RUN pnpm install --prod

# Expose the API port (as defined in .env or default)
EXPOSE 5000

# Metadata
ENV NODE_ENV=production
ENV PORT=5000

# Start the server using the compiled ESM bundle
CMD ["node", "--enable-source-maps", "./dist/index.mjs"]
