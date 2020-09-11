# node-react-postgres-stack
This application was created for the operator's customer to consult the price of a call with and without the plan of the telephone operator using Node.js (Express.js), React and Postgres

## Install packages from yarn or npm
```bash
yarn install
```
or 
```bash
npm install
```

## Environment Settings

### Docker Settings

#### Install Docker
You need install Docker(https://docs.docker.com/compose/install/)
After that, you can use `docker` 

#### Create an image
Use docker command to create an image postgres
```bash
docker run --name "name" -e POSTGRES_PASSWORD="pass" -d -p "port":5432 postgres
```
After that you can use another docker comand to start the container
```bash
docker start postgresdb
```
