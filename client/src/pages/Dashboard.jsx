import React ,{ useEffect,useState } from "react";
import { getAllReviews } from "../services/reviewService";


const Dashboard =()=>{
    const [reviews,setReviews] = useState([]);
    const [loading,setloading] =useState(true);

    useEffect(()=>{
        fetchReviews();
    }, []);

    const fetchReviews = async()=>{
        setloading(true);
        const data = await getAllReviews();
        setReviews(data);
        setloading(false);
    };

    if(loading){
        return(
            <div className="container">
                <p>Loading Reviews....</p>
            </div>
        );
    }




    return(
        <div className="container">

            <h2 className="title">AI Review History</h2>

            {reviews.length === 0 && <p>No Reviews Yet</p>}


            {reviews.map((r)=>(
                <div key={r._id} className="card">
                    <p><strong>Input:</strong> {r.inputText}</p>
                    <p><strong>FeedBack:</strong>{r.feedback}</p>
                    <p className="score"><strong>Score:</strong> {r.score}</p>

                </div>
            ))}
        </div>
    )
}

export default Dashboard;
