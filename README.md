## Description

Repository containing Backend from project 12 Reinos

## Pre-Requisites

<b>To run this app, the MongoDB must be executed and running</b>

[NodeJS](https://nodejs.org/) - Used for npm execution

[Mongo DB](https://www.mongodb.com) - Database used on project

[Mongo DB Configuration](https://docs.mongodb.com/manual/reference/connection-string/) - Tutorial for connection configuration

<li>MongoDB config url is located on file: src/app.module.ts </li>
<li>MongoDB config url can also be set as an env variable DB_URL </li><br/>

[Yarn](https://yarnpkg.com/) [Optional] - Package manager to be used instead npm

## Installation

```bash
$ yarn install
```

## Current .env values

To run this app, create a .env file on root directory containing the following information:

<li>PORT: Port where backend is executed </li>
<li>DB_URL: Connection URL of MongoDB </li>
<li>JWT_SECRET: Secret key used to generate/validate the JWT tokens </li><br/>

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Checking app documentation

```bash
# command to generate the documentation - after execution, open localhost:8080 to see the info
$ yarn doc
```
