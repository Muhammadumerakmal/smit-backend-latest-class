const mongoose = require("mongoose")



const studentSchema = new mongoose.Schema({
  studentname:{
    type: String,
    required: true
  },
  contact:{
    type: String,
  },
  cnic:{
    type: String,
    unique: true
  }
})

const studentModel = mongoose.model("students", studentSchema)

module.exports = studentModel