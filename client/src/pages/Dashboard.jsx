import React ,{ useEffect,useState } from "react";
import { getAllReviews } from "../services/reviewService";
import { timeAgo } from "../utils/formatters";


const Dashboard =()=>{
    const [reviews,setReviews] = useState([]);
    const [loading,setloading] =useState(true);

    useEffect(()=>{
        fetchReviews();
    }, []);

    const fetchReviews = async()=>{
        setloading(true);

        const start = Date.now();

        const data = await getAllReviews();
        setReviews(data);

        const elapsed = Date.now()-start;
        const remaining = 6000 - elapsed;

        setTimeout(()=>{
            setloading(false);
        },remaining >0 ? remaining :0);
        
    };

    if(loading){
        return(
            <div className="container">
                <div className="skeliton"></div>
                <div className="skeliton"></div>
                <div className="skeliton"></div>
            </div>
        );
    }




    return(
        <div className="container">

            <h2 className="title">AI Review History</h2>

            {reviews.length === 0 && <p>No Reviews Yet</p>}


            {reviews.map((r,index)=>(
                <div key={r._id} className={`card ${index ===0 ? "highlight":""}`}>
                    <p><strong>Code:</strong></p>
                    <pre style={{
                        background:"#f1f3f5",
                        padding:"10px",
                        borderRadius:"6px"
                    }}>{r.inputText}</pre>
                    <p><strong>FeedBack:</strong>{r.feedback}</p>
                    <p className="score" style={{
                        color:r.score>=8 ? "green" : r.score>=5 ? "orange" :"red"
                    }}><strong>Score:</strong> {r.score}/10</p>

                    <p style={{
                        fontSize:"12px",
                        color:"#666"
                    }}>Analyzed {timeAgo(r.createdAt)}</p>

                </div>
            ))}
        </div>
    )
}

export default Dashboard;
