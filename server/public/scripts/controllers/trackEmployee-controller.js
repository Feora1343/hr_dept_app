myApp.controller('TrackEmployeeController', ['EmployeeService', function(EmployeeService) {

    const self = this;

    self.employee = EmployeeService.employee;

    self.employeeInfo = {};
    
    self.openFormUpdateEmployee = function(employee) {
        console.log('employee', employee);
        self.employeeInfo = employee;
        console.log('self.employeeInfo', self.employeeInfo);
    }
    
    self.updateEmployee = function(employee) {
        EmployeeService.updateEmployee(employee);
    }

    self.deleteEmployee = function(newEmployee) {
        console.log('Deleting New Employee:', newEmployee);
        
        EmployeeService.deleteEmployee(newEmployee);
    }
}]);