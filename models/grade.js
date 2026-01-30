const mongoose = require("mongoose");

const gradeschema = mongoose.Schema  ({
  section: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  totalstudent: {
    type: Number
  }
})
const grades = mongoose.model("grade",gradeschema)

module.exports = gradeschema;