console.log('Aggregate Service created1');
app.service('AggregateService', ['$http', function($http){
    console.log('Aggregate Service created2');
    let self = this;

    self.employees = { employeesList: [{name: 'jan', employee_number: 1, salary: 20000, title: 'accountant'}, {name: 'louis', employee_number: 2, salary: 30000, title: 'accountant'}, {name: 'Renee', employee_number: 3, salary: 40000, title: 'boss'}] };

    self.getEmployees = function(){
        $http({
            method: 'GET',
            url: '/employees'
        }).then(function(response){
            console.log('Got all employees');
            self.employees.employeesList = response.data;
        }).catch(function(error){
            console.error('Error occured on getting employees', error)
        })
    }
}]);