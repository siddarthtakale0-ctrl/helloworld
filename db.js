const mongoose = require('mongoose');
const mongoURL = 'mongodb://localhost:27017/hotellss' // replayced my dtabase with your dtabase name


// setup mongodb connection
mongoose.connect(mongoURL);
   

//get the default connection
//mongoose maintains a default cnnection object representing the mongodb connection
const db= mongoose.connection;
// define event listners

db.on('connected',() =>{
    console.log('connected to mongodb server');
});
db.on('disconnected',() =>{
    console.log('connected to mongodb server');
});
db.on('error',() =>{
    console.log('connected to mongodb server');
});

// exporot the dtabase cnnectoin
module.exports=db;
