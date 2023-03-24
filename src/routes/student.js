const express = require("express");
const {Student}= require("../model/studentSchema")
const {idcolle} = require("../model/studentSchema");


const router = new express.Router;


router.get("/students" ,async(req, res)=>{
    try{
        let readData =await Student.find();
        res.send(readData)
    }catch(err){
        res.status(400).send(err)
    }
});

router.post("/students" , async(req, res )=>{
    try{
        let studentData =  await idcolle.find().sort({_id:-1});
        let recentId = studentData[0].id//7
        // console.log(recentId);
        let ids=new idcolle({id:recentId+1})
        await ids.save() ;  
       
        // console.log(req.headers.name,req.headers.division )
        let data = new Student ({
        id:recentId+1,
        name:req.headers.name,
        currentClass: req.headers.currentclass,
        division: req.headers.division
      });
    
    let createdData = await data.save();
     res.send(createdData);
     
    }catch(err){
        res.status(400).send(err.message);
    }
})

router.put("/students/:id" , async (req, res)=>{
    try{
      let _id = req.params.id;
      let updatedData = await Student.findByIdAndUpdate(_id, req.body , {new:true});
      res.send(updatedData)
    }
    catch(err){
        res.status(400).send(err.message);
    }
})


router.delete("/students/:id" , async(req, res)=>{
    try{
      let deletedData = await Student.findByIdAndDelete(req.params.id);
      res.send(deletedData)
    }catch(err){
        res.status(400).send(err);
    }
})

module.exports = router;