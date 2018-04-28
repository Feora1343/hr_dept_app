## What Are We Building It With?
```                          
,___________,         .----------,  _Request_    .---------,         .----------.
|___________|       ,'________ ,'|   -> | ->   ,'________,'|        ( ~--------~ )
| HTML 5    |      | AngularJS | |      |      | _______ | |        | ~--------~ |
| CSS       |      | Angular   | |      |      | Node.js | |        | MongoDB    |
| Angular   | <--  |  Material | |      |      | Express | |  <--   | Robo3T     |        
|  Material |      |           | ;   <- | <-   | _______ | ;        | ~--------~ |
|___________|      |___________|'  _Response_  |_________|'         `.__________.'
    Client          Client Logic                  Server               Database
           *Front End*                                     *Back End*              
```

## Base Mode

You will need to make a front end with three views.

### Add Employee View

- [x] Should be a form that a HR person can add a new employee
    - [x] Each Employee has a Name, an ID Number, a Salary, a Title, and a Hire Date
    - [x] Submiting the form will add this new employee to the database.

### Track Employee View

- [x] Should have a list of All Employees
    - [x] Clicking on an Employee should open a form to update their name, salary, and title. Submit the updated fields to the database.
    - [x] There should also be the option to terminate the employee. Delete them from the database.

### Reports View

- [x] The User should be able to see aggregate data of all employees:
    - [x] Average, Maximum, and Minimum Salary
    - [x] Number of Employees
    - [x] Every Job Title and the Names of Employees that have that title
