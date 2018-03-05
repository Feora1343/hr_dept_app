console.log('Aggregate Service created1');
myApp.service('AggregateService', ['$http', function($http){
    console.log('Aggregate Service created2');

    let self = this;
  
    self.employees = { employeeList:[] }; 

    self.getEmployees = function(){
        console.log('in GET employees');
        
        $http({
            method: 'GET',
            url: '/employees'
        }).then(function(response){
            console.log('Got all employees',response.data);
            self.employees.employeeList = response.data;
            self.aggregateAllData();
        }).catch(function(error){
            console.error('Error occured on getting employees', error)
        })
    }

    self.aggregateAllData = function(){
        self.salaryAverage = 0;
        self.numOfEmployees = 0;   
        self.minSalary = self.employees.employeeList[0].salary; //initiate minSalary with first person's salary
        self.maxSalary = self.employees.employeeList[0].salary; //initiate maxSalary with first person's salary 
        self.possibleJobTitles = [];
        for (employee of self.employees.employeeList){
            self.numOfEmployees+=1;
            self.salaryAverage += employee.salary;
            if (self.minSalary > employee.salary){
                self.minSalary = employee.salary //reset the val of minSalary if that employees' salary is less that the current minSalary
            }
            if (self.maxSalary < employee.salary){
                self.maxSalary = employee.salary //reset the val of maxSalary if that employees' salary is more than the current maxSalary
            }
            if (self.possibleJobTitles.indexOf(employee.title)==-1){
                self.possibleJobTitles.push(employee.title);
            }
        }
        self.salaryAverage = self.salaryAverage/self.numOfEmployees; //calculate average salary
        console.log('Average:', self.salaryAverage, 'Number Of Employees:', self.numOfEmployees);
        console.log('Max Salary:', self.maxSalary, 'Min Salary:', self.minSalary);
    
        //list every job title and the names of employees that have that title
        console.log('possible job titles array:', self.possibleJobTitles);
        
        self.personInJobsObject = {};
        for (job of self.possibleJobTitles){
            console.log('current job in for loop:', job);
            self.currentEmployeeList = [];
            for (employee of self.employees.employeeList){
                if (employee.title == job){
                    self.currentEmployeeList.push(employee.name);
                }
            }
            self.personInJobsObject[job] = self.currentEmployeeList;
        }
        console.log('employee job object:', self.personInJobsObject);
        }   
     self.getEmployees();
}]);