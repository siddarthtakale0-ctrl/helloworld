const express =require('express')

const app = express();
const db = require('./db');
const bodyparser=require('body-parser');
app.use(bodyparser.json());
const person=require('./models/person');
const menuitem=require('./models/menu');
app.get('/', (req, res) => {
  res.send('Hello diuniya')
})
app.post('/person',async (req,res)=> {
  try{
  const data = req.body  // assuming the request body contains personds data
   // create a new person document using the mngoose model
   const newperson= new person(data);
   // save the persons documents and details
  const response= await newperson.save();
  console.log('data saved');
  res.status(200).json(response);
  }
  catch(err){
    console.log(err);
    res.status(500).json({error: err.message});

  }
   
  //  newperson.name=data.name;
  //  newperson.age=data.age;   
  //  newperson.mobile=data.mobile;  //  instead of writng this heavy long data you can directly pass the data 
  //  newperson.email=data.email;
  //  newperson.address=data.address;
})
app.get('/person',async(req,res)=>{
  try{
  const data= await person.find();
  console.log('data fetched');
  res.status(200).json(data);
  }catch(err){
 console.log(err);
    res.status(500).json({error: err.message});

  }
})

app.listen(3000,()=>{
  console.log("listening on port 3000");
})
