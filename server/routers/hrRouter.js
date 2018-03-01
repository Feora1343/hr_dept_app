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