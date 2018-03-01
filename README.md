# HR Department

## MEAN Group Activity

You will be making a MEAN Stack App for an HR department. HR has requested that they be able to manage new employees, run reports on the company, and change employee information, including terminate them. HR also wants it to be pretty.

You will need to follow the MVC pattern. Use a custom service or two to make your http calls and store data persistent between different views. You will also be streaching your MongoDB skills. Try to keep your code DRY.

Try your hand with Angular Material!

Plan with your group before you start. Make some goals for yourself -- this project uses all the new things we've learned this week, so this is a great time to self assess!

## Base Mode

### Goals

* [ ] Create
* [ ] Read
* [ ] Update
* [ ] Delete

You will need to make a front end with three views.

### Add Employee View

* Should be a form that a HR person can add a new employee
    * Each Employee has a Name, an ID Number, a Salary, a Title, and a Hire Date
    * Submiting the form will add this new employee to the database.

### Track Employee View

* Should have a list of All Employees
    * Clicking on an Employee should open a form to update their name, salary, and title. Submit the updated fields to the database.
    * There should also be the option to terminate the employee. Delete them from the database.

### Reports View

* The User should be able to see aggregate data of all employees:
    * Average, Maximum, and Minimum Salary
    * Number of Employees
    * Every Job Title and the Names of Employees that have that title

## Hard Mode

### Goals

* [ ] Change Schema on Fly
* [ ] Practice Updates

HR requests a way to track employees who no longer work here. - Add a count of the employees who are currently not working there in the Reports View.

They also want to be able to rehire a terminated employee. - In the Track Employee view, when a user clicks on an employee who is not currently working, show the date they were terminated and add a button to Rehire them. - Rehiring should change their status in the db. You'll have to not delete employees anymore, and you'll have to reassess how the Track Employees and the Reports views work.

## Pro Mode

### Goals

* [ ] Subdocuments
* [ ] Schema Updating

HR wants to add a way to track employee reviews. Research Subdocuments -- You should create a new Schema for Reviews and reference it in your Employee Schema. Read those docs!

* Make a new View 'Conduct Review'
* It should have a list of all employees
* Selecting an Employee should open a history list of that employee's work
    * It should allow the User to add a review for that employee, which should have:
        * a rating on a scale of your choice
        * a reason of the review
        * a date