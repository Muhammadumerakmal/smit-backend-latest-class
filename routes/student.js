// routes\student.js
const express = require("express");
const studentModel = require("../models/stumodel");
const Router = express.Router();

let data = [
  {
    id: 1,
    name: "Muhammed Ali akmal",
    age: 16,
    occupation: "Software Developer",
  },
  {
    id: 2,
    name: "Muhammed umer akmal",
    age: 19,
    occupation: "Software Developer",
  },
];

Router.get("/", async (req, res) => {
  let paramsobj = req.query;
  let result = await studentModel.find({});
  res.json(result);
});

Router.get("/:id", (req, res) => {
  let id = req.params.id;
  console.log(id);

  let result = data.find((x) => x.id == id);

  res.json(result);
});

Router.post("/", (req, res) => {
  const body = req.body;
  let arr = ["name", "age"];
  let errar = [];

  arr.forEach((key) => {
    if (!body[key]) {
      errar.push(`${key} is required`);
    }
  });
});

Router.delete("/:id", (req, res) => {
  const id = req.params.id;

  let index = data.findIndex((x) => x.id == id);

  if (index === -1) {
    return res.json({ success: false, message: "Student not found" });
  }

  let deletedStudent = data.splice(index, 1);

  res.json({
    success: true,
    message: "Student deleted successfully",
    data: deletedStudent[0],
  });
});

Router.put("/:id", (req, res) => {
  const id = req.params.id;
  const body = req.body;

  let index = data.findIndex((x) => x.id == id);

  if (index === -1) {
    return res.json({ success: false, message: "Student not found" });
  }

  data[index] = {
    ...data[index],
    ...body,
  };

  res.json({
    success: true,
    message: "Student updated successfully",
    data: data[index],
  });

  if (errar.length > 0) {
    res.json({ success: false, message: errar.join(","), data: errar });
  }

  res.json(body);

  module.exports = Router;

  const obj = new studentModel(body);
  obj
    .save()
    .then((result) => {
      res.json({
        success: true,
        message: "Student created successfully",
        data: result,
      });
    })
    .catch((err) => {
      res.json({
        success: false,
        message: "Student creation failed",
        error: err.message,
      });
    });
});

module.exports = Router;
