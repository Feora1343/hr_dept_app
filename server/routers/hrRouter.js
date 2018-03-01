const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

//create schema

const EmployeeSchema = new mongoose.Schema(
    {
        name: String,
        employee_number: String,
        salary: Number,
        title: String,
        hire_date: { type: Date, default: new Date()},

    }
);

const Employee = mongoose.model('Employee', EmployeeSchema, 'employees');

router.get('/', (request,response) => {
    Employee.find({}, (error, foundEmployees)=>{
        if (error){
            console.log('Error on find Employees:', error);
            response.sendStatus(500);
        }
        else {
            response.send(foundEmployees);
        }
    })
});

router.post('/', (request, response) =>{
    let newEmployee = new Employee(request.body);
    console.log('Employee to save is', request.body);
    newEmployee.save((error, savedEmployee)=> {
        if (error){
            console.log('Error on add Employee', error);
            response.sendStatus(500);
        }
        else {
            response.sendStatus(201);
        }
    })
});

router.put('/:id', (request, response)=>{
    let id = request.params.id;
    let employeeToUpdate = request.body;
    Employee.findByIdAndUpdate(
        {"_id": id},
        {$set: employeeToUpdate},
        (error, updatedEmployee) => {
            if (error){
                console.log('Error on update Employee:', error);
                response.sendStatus(500);
            }
            else {
                response.sendStatus(200);
            }
        }
    )
})

router.delete('/delete/:id', (request, response)=>{
    let id = request.params.id;
    console.log('Employee to delete is', request.body);
    Employee.findByIdAndRemove(
        {"_id": id},
        (error, deleteEmployee) =>{
            if (error){
                console.log('Error on delete Employee', error);
                response.sendStatus(500);
            }
            else {
                response.sendStatus(200);
            }
        }
    )
});

module.exports = router;