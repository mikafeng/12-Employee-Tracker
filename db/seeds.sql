INSERT INTO department (dept_id, dept_name)
VALUES (1, "Engineering"),
(2, "Finance"),
(3,"Legal"),
(4, "Sales");

INSERT INTO role (role_id, title, salary, dept_id)
VALUES (1, "Sales Lead", 100000, 4),
(2, "Lead Engineer", 150000, 1),
(3,"Software Engineer", 90000, 1),
(4, "Accountant", 110000, 4),
(5, "Lawyer", 170000, 3);

INSERT INTO employee (employee_id, first_name, last_name, role_id, manager_id)
VALUES (1, "Tyler", "Smith", 2, 108),
(2, "Lesley", "Wang", 3, 106),
(3,"Sophia", "Cruz", 4, 120),
(4, "Julian", "Joshi", 1, 325);