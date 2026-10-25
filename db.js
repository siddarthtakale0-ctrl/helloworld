const mongoose = require('mongoose');
require('dotenv').config();
 // const mongoURL='mongodb+srv://siddarthtakale0:siddarthtakale01@cluster0.wes8vut.mongodb.net/'
const mongoURL = process.env.MONGODB_URL;
mongoose.connect(mongoURL);

// setup mongodb connection
//mongoose.connect(mongoURL);
   

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
