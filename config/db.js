const mongoose = require("mongoose");
// "mongodb+srv://umerakmal:987654321@smitbabox.wh1dfow.mongodb.net/"
const connectDB = () => {
  return new Promise((resolve, reject) => {
    // mongodb+srv://azizakmal575_db_user:KwlCHgjyARY5fwLI@smitbabox.wh1dfow.mongodb.net/
    mongoose
      .connect("mongodb+srv://muhammadali:qwerty123ali@cluster0.fyqtm9s.mongodb.net/")
      .then(() => {
        console.log("Database connected successfully");
        resolve();
      })
      .catch((err) => {
        console.log("Database connection error:", err.message);
        reject(err);
      });
  });
};

module.exports = connectDB;
