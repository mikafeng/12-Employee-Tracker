//packages 
const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');


const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//mysql connection
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'system_db'
    },
    console.log(`Connected to the system_db database.`)
);

//inquirer main prompts
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
    .
    then((selection) => {
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

//VIEW DEPARTMENT
function viewDept() {
    console.log("Viewing Departments\n");

    db.query('select * from department', (err, data) => {
        err ? console.log(err) :
        console.table(data);
        firstPrompt();
    })
};

//VIEW ROLE
function viewRole() {
    console.log("Viewing Roles\n");

    db.query('select * from role', (err, data) => {
        err ? console.log(err) :
            console.table(data);
        firstPrompt();
    })
};

//VIEW EMPLOYEE
function viewEmployee() {
    console.log("Viewing Employees\n");

    db.query('select * from employee', (err, data) => {
        err ? console.log(err) :
            console.table(data);
        firstPrompt();
    })
};

//ADD DEPARTMENT
function addDept() {
    
    inquirer.prompt([
        {
        type: 'input',
        name: 'dept_name', 
        message: 'Enter Department Name'
        }
    ])
    .then((answer) => {
        console.log(answer);
        db.query(`
        insert into department set ? `, [answer], (err, data) => {
        err ? console.log(err) :
        console.log('Department Added')
         firstPrompt();
        })
    })
};

//ADD ROLE
    function addRole() {

        inquirer.prompt([
            {
                type: 'input',
                name: 'salary',
                message: 'Enter Employee Salary'
            },
            {
                type: 'input',
                name: 'title',
                message: 'Enter Employee Title'
            },
            {
                type: 'input',
                name: 'dept_id',
                message: 'Enter Departent Id'
            }
        ])
            .then((answer) => {
                db.query(`
                insert into role set ?`, [answer], (err, result) => {
                    err ? console.log(err) :
                        console.log('Role Added')
                        firstPrompt();
                })
            });
    };

//ADD EMPLOYEE
 function addEmployee() {

    inquirer.prompt([
            {
                type: 'input',
                name: 'first_name',
                message: 'Enter Employee First Name'
             },
             {
               type: 'input',
               name: 'last_name',
               message: 'Enter Employee Last Name'
              },
            {
                type: 'input',
                name: 'role_id',
                message: 'Enter Employee Role Id'
            },
        {
            type: 'input',
            name: 'manager_id',
            message: 'Enter Employee Manager Id'
        }
            ])
        .then((answer) => {
            db.query(`insert into employee set ?`, [answer], (err, result) => {
             err ? console.log(err) :
            console.log('Employee Added')
            firstPrompt();
                    })
                });
            };
    
    function updateEmployee() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'employee_id',
                message: 'Employee Id to update?',
            },            
            // {
            //     type: 'number',
            //     name: 'manager_id',
            //     message: 'Update manager id'
            // }
            {
                type: 'input',
                name: 'role_id',
                message: 'Update Role Id'
            }

        ])
            .then((answer) => {
                let x = answer
                let y = answer
                db.query(`update employee set role_id = ${x.role_id} where employee_id = ${y.employee_id}`, (err, result) => {
                    err ? console.log(err) :
                        console.log('Employee Updated')
                    firstPrompt();
                })
            });
    };
    

 firstPrompt();

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

