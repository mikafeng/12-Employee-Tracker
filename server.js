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

const connection = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '1020&Git',
        database: 'employee_db'
    }
)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
