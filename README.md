# Instructions:

## setup database:
### win10+:
link: https://www.postgresql.org/download/windows/
download postgresql on your device and create database and user with the corresponding name and password:
>name: hesha
>password: 123123

### linux:
please refer to --> https://www.postgresql.org/download/linux/.

create database and user with the corresponding name and password:
- database name: hesha
- user name: hesha
- user password: 123123
- command: GRANT ALL PRIVILEGES ON DATABASE hesha TO hesha;


## ports:

### database port:
    5432


### backend port:
    5000


## install packages (dependencies):

open directory/file in terminal and npm install.
cd to build_storefront_backend npm install.

## run migrations to create tables:
- db-migrate up
- npx db-migrate up
