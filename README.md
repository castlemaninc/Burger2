# HW - Burger2

## Live Link
https://dry-ridge-75209.herokuapp.com/burgers

## Description on how to use the Burger2 application 

1. Enter the name of a hamburger that you would like to eat. You can make up any type of hamburger and hit the submit button. 

2. After the hamburger is posted to the page, you can eat it by pressing the 'DEVOUR IT' button. 

## Requirements 

1. Remove all references to the previous vanilla MySQL queries in the previous Burger application and replace them with Sequelize queries.

2. Remove old files such as ORM.js and any references to it in burgers_controller.js 


## Technologies Used 

- Sequelize 
- Node.js, Express, 
- MySQL Workbench
- Handlebars 

## Code Explanation 

A connection to the MySQL database is created with Sequelize in the config/connection.js. The connection is then exported and required in model/burger.js where the data is defined and given datatypes in our MySQL database. 

The burgers_controller.js file is where the routes are defined.  

Sequelize methods such as findAll(), create(), and update() replaced the previous vanilla MySQL queries. 

