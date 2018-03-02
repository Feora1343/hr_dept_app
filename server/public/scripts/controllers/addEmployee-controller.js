myApp.controller('AddEmployeeController', ['EmployeeService', function (EmployeeService) {
    const self = this;
    // START ADD NEW EMPLOYEE
    self.addEmployee = function(newEmployee) {
        console.log('Adding New Employee: ', newEmployee);
        EmployeeService.addEmployee(newEmployee);
    }
    // END ADD NEW EMPLOYEE
}])