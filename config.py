
# Configuration file for database credentials

pg_user = 'avnadmin'
pg_password = 'UMOKcUwA3qcYj52WR6lIB4SHAMATuoBU'
db_name = 'defaultdb?sslmode=require'
pg_host = 'mydatabase-ermiasgelaye-d9b4.c.aivencloud.com:26131'

# Create the DATABASE_URL string
DATABASE_URL = f"postgresql://{pg_user}:{pg_password}@{pg_host}/{db_name}"


