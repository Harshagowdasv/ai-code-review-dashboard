const mongoose = require('mongoose');

const connectDB = async ()=> {
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/code-review-dashboard");
        console.log("Mongodb is connected");
    }catch(error){
        console.error("DB error:",error.message);
        process.exit(1);
    }
};

module.exports = connectDB;