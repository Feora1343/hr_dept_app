const express = require('express');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('server/public'));

//Mongoose setup 
const mongoose = require('mongoose');

const databaseUrl = 'mongodb://localhost:27017/employees';

mongoose.connection.on('connected', function(){
        console.log('mongoose conntected to:', databaseUrl);
})

mongoose.connection.on('error', function(error){
        console.log('mongoose connection error', error);
        
})

mongoose.connect(databaseUrl);
//End Mongoose

//router
const hrRouter = require('./routers/hrRouter');
app.use('/employees', hrRouter);


//Server
let port = process.env.PORT || 5000;

app.listen(port, function(){
        console.log('listening on port', port);

});

