app.controller('AggregateController', ['AggregateService', function(AggregateService){
    console.log('AggregateController created');
    let self = this;

    self.getEmployees = AggregateService.getEmployees;
    self.employees = AggregateService.employees;

    AggregateService.getEmployees();
    

    //calculate average, max and min salary
    //calculate number of employees
    //list every job title and the names of employees that have that title
}])