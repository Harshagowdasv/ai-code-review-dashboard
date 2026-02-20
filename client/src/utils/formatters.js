export const  timeAgo = (date)=>{
    const seconds = Math.floor((new Date()-new Date(date))/1000);

    if(seconds <60) return "Just now";
    if(seconds <3600) return Math.floor(seconds/60)+"Min Ago";
    if(seconds <86400) return Math.floor(seconds/3600)+"hrs ago";

    return Math.floor(seconds/86400)+"Days ago";
};