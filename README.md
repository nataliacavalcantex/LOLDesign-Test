# LOLDesign-Test
This application was created for the operator's customer to consult the price of a call with and without the plan of the telephone operator, using React and Node.js(Expressjs)

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
docker run --name postgresdb -e POSTGRES_PASSWORD=123 -d -p 5555:5432 postgres
```
After that you can use another docker comand to start the container
```bash
docker start postgresdb
```
