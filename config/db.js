const mongoose = require('mongoose');

 const connectDB = async () => {
    try {
      await mongoose.connect(process.env.mongoURL).then(()=> console.log("database conected"));
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
      process.exit(1); // Exit the process with failure
    }
  };

  module.exports = connectDB;




  
// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.