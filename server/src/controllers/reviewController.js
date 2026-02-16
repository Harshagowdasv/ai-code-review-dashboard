const Review = require("../models/Review");
const {analyzeCode} = require("../services/aiService");

const createReview = async (req,res,next)=>{
    try{
        const {inputText} = req.body || {};

        if(!inputText){
            return res.status(400).json({
                sucess:false,
                message:"inputText is required",
            });
        }

        const aiResult = await analyzeCode(inputText);

        const review = await Review.create({
            inputText,
            feedback:aiResult.feedback,
            score:aiResult.score,
        });

        res.status(201).json({
            sucess:true,
            data:review,
        });
    }catch(error){
        next(error);
    }

};

const getReviews = async (req,res,next)=>{
    try{
        const reviews = await Review.find().sort({createdAt:-1});

        res.status(200).json({
            success:true,
            data:reviews,
        });
    }catch(error){
        next(error);
    }
};

module.exports = {
    createReview,
    getReviews,
};