import api from "./api";

export const getAllReviews = async ()=>{
    try{
        const res = await api.get("/reviews");
        return res.data.data;

    }catch(error){
        console.error("Error fetching reviews:",error);
        return[];
    }
};