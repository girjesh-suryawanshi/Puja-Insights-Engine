<meta name="google-site-verification" content="ZP9OdBGStyGFqrfkyZV5Tq0kOIcixaqLyO7OpDOdVrE" />

to run project locally use command 

step 1
D:\ReactWorkspace\Puja-Insights-Engine\artifacts\api-server> pnpm run dev --- for backend
Step 2
D:\ReactWorkspace\Puja-Insights-Engine\artifacts\vedic-puja>pnpm run dev  --- for front end




# From your project root:
cp .env.vps .env

docker-compose -f docker-compose.prod.yml build --no-cache


docker compose -f docker-compose.prod.yml up -d --build



Phase 3: Building and Deploying
Run docker-compose -f docker-compose.prod.yml build --no-cache to force a clean build of images (this will trigger the new sitemap generation).
Run docker-compose -f docker-compose.prod.yml up -d to restart services.


docker logs -f puja-api-prod


docker exec -it puja-web-prod ls -l /usr/share/nginx/html/sitemap.xml


docker exec puja-api-prod node -e "console.log(require('bcryptjs').hashSync('pass@123', 10))"


docker exec -it puja-db-prod psql -U puja_admin -d puja_insights -c "UPDATE users SET password_hash = 'PASTE_THE_STRING_HERE' WHERE email = 'manali@gmail.com';"


🛠️ Commands to Check Logs:
Check API Logs (Most Important): This will show you errors from the backend (e.g., if the user wasn't found or the hash didn't match):

bash
docker logs -f puja-api-prod
Check Frontend/Nginx Logs: This will show you if the request is even reaching the backend or if it's being blocked by Nginx:

bash
docker logs -f puja-web-prod
Check Host Nginx Logs (If Error 502/504): If your domain isn't loading at all, check the main VPS Nginx:

bash
tail -f /var/log/nginx/error.log



docker exec -it puja-db-prod psql -U puja_admin -d puja_insights -c "SELECT email, password_hash FROM users WHERE email='manali@gmail.com';"

docker exec -it puja-db-prod psql -U puja_admin -d puja_insights -c "DELETE FROM users WHERE email='manali@gmail.com';"

docker exec -it puja-db-prod psql -U puja_admin -d puja_insights -c "INSERT INTO users (email, password_hash, role) VALUES ('manali@gmail.com', '\$2a\$10\$7uVpLzQpYV/V8o9uH5J2m7xR3L8O9ZfO9uH5J2m7xR3L8O9ZfO9uG', 'admin');"



How to paste it on your VPS:
Create the file:
bash
nano /etc/nginx/sites-available/radheradhepuja.com
Paste your code into that file.
Enable the site:
bash
ln -s /etc/nginx/sites-available/radheradhepuja.com /etc/nginx/sites-enabled/
Test and Reload Nginx:
bash
nginx -t
systemctl reload nginx


docker exec -it puja-api-prod pnpm -w run db:push

docker exec -it puja-api-prod pnpm -w run db:push





