# Configuration file for database credentials

pg_user = 'avnadmin'
pg_password = 'AVNS_H8UldLoBDWmhUDQHibe'
db_name = 'defaultdb'
pg_host = 'pg-1ff11395-ermiasgelaye-d9b4.h.aivencloud.com:26131'

# Create the DATABASE_URL string
DATABASE_URL = f"postgresql://{pg_user}:{pg_password}@{pg_host}/{db_name}"

