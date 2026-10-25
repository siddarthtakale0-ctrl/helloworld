const express =require('express')


require('dotenv').config();
const app = express();
const db = require('./db');
const bodyparser=require('body-parser');
app.use(bodyparser.json());
 const PORT=process.env.PORT || 3000;
//const person=require('./models/person');
//const menuitem=require('./models/menu');
app.get('/', (req, res) => {
  res.send('Hello diuniya')
})

   // const PORT=process.env.PORT || 3000;
  

// import the router
 const personroutes = require('./routes/personroutes');
 const menuitem=require('./routes/menuroutes');
 // use the router 
 app.use('/person',personroutes);
 app.use('/menu',menuitem);
 //const PORT=process.env.PORT || 3000;
app.listen(PORT,()=>{
  console.log("listening on port 3000");
})
