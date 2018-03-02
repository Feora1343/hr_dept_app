console.log('Aggregate Service created1');
myApp.service('AggregateService', ['$http', function($http){
    console.log('Aggregate Service created2');
    let self = this;
    // TAKE AWAY WHEN ALL IS MERGED!!!!
    // self.employees = { employeeList: [{name: 'jan', employee_number: 1, salary: 20000, title: 'accountant'}, {name: 'louis', employee_number: 2, salary: 30000, title: 'accountant'}, {name: 'Renee', employee_number: 3, salary: 40000, title: 'boss'}] };
    
    self.employees = { employeeList:[] }; //ADD BACK IN WHEN ALL IS MERGED!!!
    self.getEmployees = function(){
        console.log('in GET employees');
        
        $http({
            method: 'GET',
            url: '/employees'
        }).then(function(response){
            console.log('Got all employees',response.data);
            self.employees.employeeList = response.data;
        }).catch(function(error){
            console.error('Error occured on getting employees', error)
        })
    }
     self.getEmployees();
}]);