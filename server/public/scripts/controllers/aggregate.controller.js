app.controller('AggregateController', ['AggregateService', function(AggregateService){
    console.log('AggregateController created');
    let self = this;

    self.getEmployees = AggregateService.getEmployees;
    self.employees = AggregateService.employees;

    
    
    //calculate average, max and min salary
    //get employeeList:
    // self.employeeList = self.employees.employeeList
    // console.log('employeeList in controller', employeeList);
    
    //employees.employeeList.salary

    //calculate number of employees


    //list every job title and the names of employees that have that title

    //self.getEmployees(); //ADD BACK WHEN ALL IS MERGED!
    
}]);