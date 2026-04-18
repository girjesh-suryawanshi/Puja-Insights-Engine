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


docker exec -it puja-db-prod psql -U puja_admin -d puja_insights -c "UPDATE users SET password_hash = '$2b$10$9iB0VmAyt3APZf4XiuQoA.NJrvqhWcM1SYD22dzY3NkTq5Ak9hc7W' WHERE email = 'admin@radheradhepuja.com';"


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


cat <<EOF > scripts/seed_admin.mjs
import pg from 'pg';
import bcrypt from 'bcryptjs';

const DATABASE_URL = "postgresql://puja_admin:puja_pwd_change_me@localhost:5436/puja_insights";

async function createAdmin() {
  const client = new pg.Client({ connectionString: DATABASE_URL });
  try {
    await client.connect();
    const email = "admin@radheradhepuja.com";
    const password = "Crompton@1310"; // CHANGE THIS!
    const role = "admin";
    const hash = await bcrypt.hash(password, 10);
    
    await client.query(
      "INSERT INTO users (email, password_hash, role) VALUES (\\\$1, \\\$2, \\\$3) ON CONFLICT (email) DO NOTHING",
      [email, hash, role]
    );
    console.log("✅ Admin user created: " + email);
  } catch (err) {
    console.error("❌ Error creating admin:", err);
  } finally {
    await client.end();
  }
}

createAdmin();
EOF

# Run the script
node scripts/seed_admin.mjs





Important step after database push 

1. Generate has password
docker exec puja-api-prod node -e "console.log(require('bcryptjs').hashSync('pass@123', 10))"

2. update password =pass@123
docker exec -it puja-db-prod psql -U puja_admin -d puja_insights -c "UPDATE users SET password_hash = '\$2b\$10\$Ci2YOzYQtMB2BGo45rcNae2COpoDDhPYOymHSw48ksPAtUXLKVr6e' WHERE email = 'admin@radheradhepuja.com';"

3.check 
docker exec -it puja-db-prod psql -U puja_admin -d puja_insights -c "SELECT email, password_hash FROM users;
4 verify

root@srv1022252:/opt/Puja-Insights-Engine# docker exec -it puja-db-prod psql -U puja_admin -d puja_insights -c "SELECT * FROM users;"
 id |          email           |                        password_hash                         | role  |         created_at         
----+--------------------------+--------------------------------------------------------------+-------+----------------------------
  1 | admin@radheradhepuja.com | $2b$10$Ci2YOzYQtMB2BGo45rcNae2COpoDDhPYOymHSw48ksPAtUXLKVr6e | admin | 2026-04-07 18:21:52.450826
  2 | girjeshlt@gmail.com      | $2b$10$36eXrs9H720bxFa5YH1BVOXDNafCwyM1Vp351wALO62crVKfMPWoe | admin | 2026-04-07 18:32:34.99676
(2 rows)

