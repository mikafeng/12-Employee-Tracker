# 12-Employee-Tracker
A command-line application to manage a company's employee database, using Node.js, Inquirer, and MySQL.
Users can view departments, roles and employees.
Users can add a department, role or employee and update an employee's role id to change their title.

# Installation
In command line:

- clone the repo code using `git clone` command
- to create a package.json for necesarry dependencies run `npm -init -y` 
- add a start script to package.json for easy application startup `"start": "node server.js"`
- run `npm i` to get all dependencies needed for project
- install the following dependencies using `npm i` : `inquirer`, `mysql2`, `console.table`
- connect to mysql database with `mysql -u root -p` using your password

# Use
Run npm start or node server.js to start up application
Use arrow keys to move up and down the list
Hit enter to select a prompt
