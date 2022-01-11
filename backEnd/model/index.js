const mongoose = require('mongoose');



const projectSchema= mongoose.Schema(
  {
    id:{
     type:Number
    },
    Name: {
      type: String
      
    },
    skills: {
      type: String
    },
    information: {
      type: String
    },
    averageOfprice: {
      type: Number
    }
  
 
})


const Project= mongoose.model("project",projectSchema);
module.exports = Project;