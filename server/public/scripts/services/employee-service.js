myApp.service('EmployeeService', ['$http', function($http) {
    console.log('EmployeeService locked and loaded!');
    const self = this;
    self.employee = {list: []};

    self.getEmployee = function() {
        $http.get('/employee')
        .then(function(response){
            self.employee.list = response.data;
        })
        .catch(function(response){
            console.log('Error GETing employees!');
        })
    }

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