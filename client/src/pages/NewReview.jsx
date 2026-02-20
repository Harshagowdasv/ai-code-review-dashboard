import React, { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

const NewReview = () =>{
    const [inputText, setInputText] = useState("");
    const [loading, setLoading] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async ()=>{
        if(!inputText) return alert("Enter Some Code First");

        try{
            setLoading(true);

            await api.post("/reviews",{
                inputText,
            });

            setShowToast(true);
                setTimeout(() => {
                    setShowToast(false);
                    navigate("/");
                }, 800);

        }catch(error){
            console.error(error);
            alert("error creating Review");
        }finally{
            setLoading(false);
        }
    };

    return(
        <div>
            <h2>New AI Code Review</h2>

            <textarea 
            rows={8}
            style={{width:"100%"}}
            placeholder="Paste Your Code Here"
            value={inputText}
            onChange={(e)=>setInputText(e.target.value)}></textarea>

            <br /><br />

            <button onClick={handleSubmit} disabled={loading}
            style={{
                padding:"10px 16px",
                background:loading ? "#999":"#2c7be5",
                color:"#fff",
                border:"none",
                borderRadius:"6px",
                cursor:loading ? "not-allowed" : "pointer"
            }}>
                {loading ? "Analyzing...":"Analyze with AI"}

            </button>
        </div>
    );
};

export default NewReview;