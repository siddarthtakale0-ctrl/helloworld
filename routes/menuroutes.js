const express=require('express');
const router =express.Router();
const menuitem=require('./../models/menu');


router.post('/',async (req,res)=> {
  try{
  const data = req.body  // assuming the request body contains personds data
   // create a new person document using the mngoose model
   const newmenu= new menuitem(data);
   // save the persons documents and details
  const response= await newmenu.save();
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
  const data= await menuitem.find();
  console.log('data fetched');
  res.status(200).json(data);
  }catch(err){
 console.log(err);
    res.status(500).json({error: err.message});

  }
})
router.get('/:tasteType', async(req,res)=>{
  try{
   const tastetype = req.params.tasteType;  // extract the work type
   if( tastetype == 'sweet' || tastetype == 'spicy' || tastetype == 'sour' ){
        const response = await menuitem.find({taste: tastetype});
        console.log("RESPONSE FETCHED");
        res.status(200).json(response);
   }else{

    res.status(404).json({error: 'invalid work type'});
   }
  }catch(err){

  }


})
module.exports=router;