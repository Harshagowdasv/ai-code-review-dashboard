const express = require('express');
const router = express.Router();

const reviewRoutes = require("./reviews");

router.get('/health',(req,res)=>{
    res.json({status:'running'});
});

router.use("/reviews",reviewRoutes);

module.exports = router;