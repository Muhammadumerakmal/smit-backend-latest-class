

//------------------------------------------------------------------------------------------------------------------//
const express = require("express");
const connectDB = require("./config/db");
const app = express();
const studentRouter = require("./routes/student");
app.use(express.json());
app.use("/student", studentRouter);

connectDB()
  .then(() => {
    app.listen(8000, () => {
      console.log("Server is running on port 8000");
    });
  })
  .catch((err) => {
    console.log(err);
  });
