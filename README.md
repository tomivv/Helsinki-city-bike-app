# Helsinki city bike app

## Description
This project displays individual journeys taken with city bikes in Helsinki metropolitan area. Currently you are able to view individual journeys and stations.


## Prerequisites
* Nodejs version 14 or higher
* Docker

## How to get started
1. Clone repository
```bash
git clone https://github.com/tomivv/Helsinki-city-bike-app.git
```
2. Install dependencies

Frontend
```bash
cd client
yarn install
```

Backend
```bash
cd server
yarn install
```

3. Edit env files

Copy and rename .env.example files to .env files and fill the values

4. Run docker

If you want to develope server you might want to take server out of docker-compose.yml

```bash
docker compose up -d
```

5. Running app

Frontend
```bash
cd client
yarn start
```

Backend
```bash
cd server
yarn run dev
```

6. Building app

Frontend
```bash
cd client
yarn build
```

Backend
```bash
cd server
yarn run build
```

## Technologies used

* Docker
* PostgreSQL
* Nodejs
* Typescript
* React

## Software used
* Figma
  * Used to make a UI design of the app. You can check it [here!](https://www.figma.com/file/Y2jbuWE6u8paT625W9mz9F/Helsinki-city-bike-app?node-id=0%3A1)
* pgAdmin 4
* Postman
