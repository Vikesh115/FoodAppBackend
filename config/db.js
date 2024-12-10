const mongoose = require('mongoose');

var mongoURL = "mongodb+srv://vikeshraut952:bmLnyv3Js8h8QhyR@cluster0.qfaij.mongodb.net/AppdevDB?retryWrites=true&w=majority&appName=Cluster0" ;

 const connectDB = async () => {
    try {
      await mongoose.connect(mongoURL).then(()=> console.log("database conected"));
  
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
      process.exit(1); // Exit the process with failure
    }
  };

  module.exports = connectDB;




  
// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.