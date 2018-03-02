myApp.service('EmployeeService', ['$http', function($http) {
    console.log('EmployeeService locked and loaded!');
    const self = this;
    self.employee = {list: []};

    self.addEmployee = function(employee) {
        console.log('Inside Add Employee Function!');
        
        $http.post('/employee', employee)
        .then(function(response) {
            self.getEmployee();
        })
        .catch(function(response) {
            console.log('Error POSTing new employee!');
        })
        self.getEmployee();
    }
}])