//packages 
const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');
const path = require('path');


const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '1020&Git',
        database: 'system_db'
    },
    console.log(`Connected to the system_db database.`)
);

const firstPrompt = () => {

    inquirer.prompt ({
        type: 'list',
        name: 'selection',
        message: 'What would you like to do?',
        choices: [
            'View all departments',
            'View all roles',
            'View all employees',
            'Add a deparment',
            'Add a role',
            'Add an employee',
            'Update an employee role'
        ],
    })
    .then((selection) => {
        switch (selection.selection) {
            case 'View all departments':
                viewDept();
                break;

            case 'View all roles':
                viewRole();
                break;

            case 'View all employees':
                viewEmployee();
                break;

            case 'Add a deparment':
                addDept();
                break;

            case 'Add a role':
                addRole();
                break;

            case 'Add an employee':
                addEmployee();
                break;

            case 'Update an employee role':
                updateEmployee();
                break;

            case 'exit':
                db.end();
                break;
                
        }
    });
}

firstPrompt();

function viewDept() {
    console.log("Viewing Departments\n");

    db.query('select * from department', (err, data) => {
        err ? err.status(500) : 
        console.table(data);
        firstPrompt();
    })
};

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

