## Description

Repository containing Backend from project 12 Reinos

## Pre-Requisites

<b>To run this app, the MongoDB must be executed and running</b>

[NodeJS](https://nodejs.org/) - Used for npm execution

[Mongo DB](https://www.mongodb.com) - Database used on project

[Mongo DB Configuration](https://docs.mongodb.com/manual/reference/connection-string/) - Tutorial for connection configuration

<li>MongoDB config url is located on file: src/app.module.ts </li>
<li>MongoDB config url can also be set as an env variable DB_URL </li><br/>

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Checking app documentation

```bash
# command to generate the documentation - after execution, open localhost:8080 to see the info
$ npx @compodoc/compodoc -p tsconfig.json -s
```
