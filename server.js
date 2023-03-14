//packages 
const express = require('express');
const mysql = require('mysql2')
const inquirer = require('inquirer');
const fs = require('fs');
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
        password: '',
        database: 'employee_db'
    },
    console.log(`Connected to the employee_db database.`)
);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

