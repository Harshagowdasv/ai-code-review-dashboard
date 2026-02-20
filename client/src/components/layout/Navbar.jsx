import { Link } from "react-router-dom";

const Navbar = ()=>{
    return(
        <div style={{
            padding:"12px 20px",
            background:"#222",
            color:"#fff",
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center"
        }}>

            <Link to="/" style={{color:"#fff",textDecoration:"none",fontWeight:"bold"}}>
            AI Interview Analyzer
            </Link>

            <Link to="/new" style={{
                background:"#2c7be5",
                padding:"8px 14px",
                borderRadius:"6px",
                color:"white",textDecoration:"none",
                fontWeight:"bold"}}>
             +Analyze
            </Link>

        </div>
    );
};

export default Navbar;