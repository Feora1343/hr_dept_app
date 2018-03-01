app.service('AggregateService', ['$http', function($http){
    console.log('Aggregate Service created');
    let self = this;

    self.employees = { employeesList: [] };

    self.getEmployees = function(){
        $http({
            method: 'GET',
            url: '/employees'
        }).then(function(response){
            console.log('Got all employees');
            self.employees = response.data;
        }).catch(function(error){
            console.error('Error occured on getting employees', error)
        })
    }
}]);