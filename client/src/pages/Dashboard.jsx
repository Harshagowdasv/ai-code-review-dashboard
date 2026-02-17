import React ,{ useEffect,useState } from "react";
import { getAllReviews } from "../services/reviewService";


const Dashboard =()=>{
    const [reviews,setReviews] = useState([]);

    useEffect(()=>{
        fetchReviews();
    }, []);

    const fetchReviews = async()=>{
        const data = await getAllReviews();
        setReviews(data);
    };

    return(
        <div>

            <h2>AI Review History</h2>

            {reviews.map((r)=>(
                <div key={r._id} style={{border: "1px solid #ccc",margin: 10, padding: 10}}>
                    <p><strong>Input:</strong> {r.inputText}</p>
                    <p><strong>FeedBack:</strong>{r.feedback}</p>
                    <p><strong>Score:</strong> {r.score}</p>

                </div>
            ))}
        </div>
    )
}

export default Dashboard;
