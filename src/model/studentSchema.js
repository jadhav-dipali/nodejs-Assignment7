const mongoose= require("mongoose");

const StudentSchema = mongoose.Schema({
    id:{
      type:Number,
      require:true,
      unique:true,
    },
    name:{
        type:String,
        require:true,
        minlength:3,
    },
    currentClass:{
        type:Number,
      require:true,
    },
    division:{
        type:String,
        require:true,
        minlength:1,
        maxlength:1,
    }

}) ;
const idMod = mongoose.Schema({
  id:{
    type:Number
  }
});

let Student = new mongoose.model("Student" , StudentSchema);
let idcolle = new mongoose.model("idsColle" , idMod)

module.exports = {Student, idcolle};



