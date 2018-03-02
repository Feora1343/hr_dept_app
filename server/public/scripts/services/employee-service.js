myApp.service('EmployeeService', ['$http', function($http) {
    console.log('EmployeeService locked and loaded!');
    const self = this;
    self.employee = {list: []};

    self.getEmployee = function() {
        $http.get('/employees')
        .then(function(response){
            self.employee.list = response.data;
            console.log('in Employee-Service GET', self.employee.list);
            
        })
        .catch(function(response){
            console.log('Error GETing employees!');
        })
    }

    self.addEmployee = function(employee) {
        console.log('Inside Add Employee Function!');
        
        $http.post('/employees', employee)
        .then(function(response) {
            self.getEmployee();
        })
        .catch(function(response) {
            console.log('Error POSTing new employee!');
        })
    }
    //start last changed 03/02/2018 3:40
    self.updateEmployee = function(employee) {
        console.log('Inside Update Employee Function!');
        
        $http.put(`/employees/${employee._id}`, employee)
        .then(function (response) {
            console.log('Successfully Updated Employee!: ', response);
            self.getEmployee();  
        })
        .catch(function (response) {
            console.log('Error On Updating Employee! :', response);
        })
    }

    self.deleteEmployee = function(employee_id) {
        console.log('Inside Delete Employee Function!');

        $http.delete(`employees/delete/${employee_id}`)
        .then(function (response) {
            console.log('Successfully Deleted Employee!: ', response);
            self.getEmployee();  
        })
        .catch(function (response) {
            console.log('Error On Deleting Employee!:', response);
        })
    }
    //end last changed 03/02/2018 3:40
    //self.getEmployee();
}])