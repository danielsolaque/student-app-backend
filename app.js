//App.js
//Define the route handlers
const express = require('express');

//Create an instance of an Express application
const app = express();
const studentData = require('./studentData.json')

//Define our routes
//Healthcheck route

//GET / method = GET PATH = /

app.get('/', (request, response) => {
    //handler goes here
    response.status(200).json({ data: 'Service is running' });
});

//GET /students
//define path + method and handler
//catch errors

app.get('/students', (request, response) => {
    const { students } = studentData;
    response.status(200).json({ data: students });
});

//GET /students/11
app.get('/students/:id', (request, response) => {
    const { id } = request.params;
    const { students } = studentData;
    const student = students.find((student) => student.id === id);
    if (student) {
        response.status(200).json({ data: student });
    } else {
        response.status(400).json({ error: `No student with id of ${id}` });
    }
})
module.exports = app;



