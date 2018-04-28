# HR Department

## MEAN Group Activity

You will be making a MEAN Stack App for an HR department. HR has requested that they be able to manage new employees, run reports on the company, and change employee information, including terminate them. HR also wants it to be pretty.

You will need to follow the MVC pattern. Use a custom service or two to make your http calls and store data persistent between different views. You will also be streaching your MongoDB skills. Try to keep your code DRY.

Try your hand with Angular Material!

Plan with your group before you start. Make some goals for yourself -- this project uses all the new things we've learned this week, so this is a great time to self assess!

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
