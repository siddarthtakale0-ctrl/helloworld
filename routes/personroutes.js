const express = require('express');
const router = express.Router();
//require('router');
const person=require('./../models/person');

router.post('/',async (req,res)=> {
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
})

router.get('/',async(req,res)=>{
  try{
  const data= await person.find();
  console.log('data fetched');
  res.status(200).json(data);
  }catch(err){
 console.log(err);
    res.status(500).json({error: err.message});

  }
})
router.get('/:workType', async(req,res)=>{
  try{
   const worktype = req.params.workType;  // extract the work type
   if( worktype == 'chef' || worktype == 'manager' || worktype == 'waiter' ){
        const response = await person.find({work: worktype});
        console.log("RESPONSE FETCHED");
        res.status(200).json(response);
   }else{

    res.status(404).json({error: 'invalid work type'});
   }
  }catch(err){

  }



})


router.put('/:id',async(req,res)=>{
  try{
  const personid=req.params.id;
  const updatedpersondata = req.body;

  const response = await person.findByIdAndUpdate(personid,updatedpersondata, {
    returnDocument:true,
    runValidators :true,

  })
   if(!response){
    return  res.status(404).json({error: 'person not found'});
   }
  console.log('data fetched');
  res.status(200).json(response);
 // if(!response)
}catch(err){
  res.status(404).json({error: 'invalid work type'});
}
})
router.delete('/:id',async(req,res)=>{
  try{
    const personid=req.params.id;
   // const deleteperson=req.body;
    const response = await person.findByIdAndDelete(personid);
// returnDocument:true,
//     runValidators :true,
//     })
     if(!response){
    return  res.status(404).json({error: 'person not found'});
   }
  console.log('data deleted');
  res.status(200).json({message:'person deleted successuflly'});

  }catch{
   res.status(404).json({error: 'invalid work type'});
  }
})

module.exports=router ;
;