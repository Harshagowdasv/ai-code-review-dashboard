const analyzeCode = async (inputText)=>{

    return {
        feedback:"Code Looks clean, consider Adding comments for readability.",
        score:8,
    };
};

module.exports ={
    analyzeCode,
};