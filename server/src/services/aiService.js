
const {GoogleGenerativeAI}=require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({
    model:"gemini-3-flash-preview",
});


const analyzeCode = async (inputText)=>{

    try {
        const prompt =`
        You are an AI code reviewer.
        Analyze the following code and give:
        1. Short feedback (2-3 lines)
        2. Score out of 10

        Return response strictly in JSON format like:
        {
        "feedback": "text",
        "score": number
        }

        Code: ${inputText}`;

        const result = await model.generateContent(prompt);
        const response = await result.response.text();

        let parsed;
        try{
            parsed = JSON.parse(response);
        }catch(err){
            parsed={
                feedback:response,
                score:7,
            };
        }
        return parsed;
    }catch(error){
        console.error("Gemini Error",error.message);

        return{
            feedback:"AI analysis failed,try again later",
            score:5,
        };
    }
};

module.exports ={
    analyzeCode,
};