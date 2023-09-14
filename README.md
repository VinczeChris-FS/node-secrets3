# node-secrets3

## Non-Shared Secret Repo

## Secure Application Development

WDV4200

Term: 2309 (Sept. 2023)

Instructor: Orcun Tagtekin

Week 3 Node Secrets Assignment

## Needed Secrets

This Express app requires the following environment variables:

```
PORT
HOST
FIRST_NAME
LAST_NAME
```

Please see the _.env.example_ file for details.

## Usage

### Create new Node.js app

```
npm init -y
```

### Install Express package

```
npm i express
```

### Install Dotenv package

```
npm i dotenv
```

### Install nodemon package

As dev dependency.

```
npm i -D nodemon
```

### To run using nodemon

```
nodemon app.js
```

### Update gitignore

To ignore .env file.
