const mongoose = require('mongoose');
var Project=require('../model/index');

exports.addProject= (req,res)=>{
    const id = req.body.id;
    const Name = req.body.Name;
    const skills= req.body.skills;
    const information= req.body.information;
    const averageOfprice=req.body.averageOfprice;
    
     const project= new Project({
      id : id, 
      Name:Name,
      skills:skills,
      information:information,
      averageOfprice:averageOfprice,
      
     })
     
     project.save() ;
     console.log('books created',id, Name , skills , information , averageOfprice);
    
  },
  exports.Projects=(req,res)=>{
    Project.find()

    }