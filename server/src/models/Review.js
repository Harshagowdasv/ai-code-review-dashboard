const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema(
    {
        inputText:{
            type:String,
            required:true,
        },
        feedback:{
            type:String,
        },
        score:{
            type:Number,
        },
    },

    {
        timestamps:true,
    }
);

module.exports = mongoose.model("Review",ReviewSchema);