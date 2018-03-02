app.controller('AggregateController', ['AggregateService', function(AggregateService){
    let self = this;

    self.getEmployees = AggregateService.getEmployees;
    self.employees = AggregateService.employees;
    self.aggregateAllData = AggregateService.aggregateAllData;
    console.log('in controller', self.employees.employeeList);
    self.numOfEmployees = AggregateService.numOfEmployees;
    self.minSalary = AggregateService.minSalary;
    self.maxSalary = AggregateService.maxSalary;
    self.salaryAverage = AggregateService.salaryAverage;
    self.personInJobsObject = AggregateService.personInJobsObject;
    
}]);