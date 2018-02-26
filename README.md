# Project Name

Sherlock Holmes coding exercise

## Owner

- [Kelly Whiting](https://github.com/whithang)

## Tasks Accomplished

1. Import adventures-of-sherlock-holmes.txt file
2. Build empty DB schema file
3. Functions created to execute some basic data analysis
4. API endpoint created to call functions
5. Export to CSV capability for the above results

## Requirements

- Node 9.x
- mySql 5.7.20

# Database Initialization

ensure `mysql` is running before executing the application. start the server with the below command:

`mysql.server start`

to create and populate the database with the test data, run this command from the command line:
`mysql -u <USER> < schema.sql`
OR
`mysql -u <USER> -p <PASSWORD> < schema.sql`
<USER> may be `root`

## Running the App

To run server: `npm run start`

## API Reference Guide

1. API functions are found in the controllers/controller.js file
2. The format for calling the API function is: http://localhost:3000/topWords
