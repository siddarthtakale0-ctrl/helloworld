const express =require('express')

const app = express();
const db = require('./db');
const bodyparser=require('body-parser');
app.use(bodyparser.json());
//const person=require('./models/person');
//const menuitem=require('./models/menu');
app.get('/', (req, res) => {
  res.send('Hello diuniya')
})

   
  

// import the router
 const personroutes = require('./routes/personroutes');
 const menuitem=require('./routes/menuroutes');
 // use the router 
 app.use('/person',personroutes);
 app.use('/menu',menuitem);
app.listen(3000,()=>{
  console.log("listening on port 3000");
})
