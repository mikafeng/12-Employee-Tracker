DROP DATABASE IF EXISTS system_db;
CREATE DATABASE system_db;

USE system_db;

CREATE TABLE department (
    dept_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    dept_name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
    role_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary INT NOT NULL,
    dept_id INT NOT NULL,
    INDEX (`dept_id`),
    FOREIGN KEY (dept_id) REFERENCES department(dept_id)
);

CREATE TABLE employee (
    employee_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT,
    INDEX (`role_id`),
    FOREIGN KEY (role_id) REFERENCES role(role_id)
);