import { Link } from "react-router-dom";

const Navbar = ()=>{
    return(
        <div style={{
            padding:"12px",
            background:"#222",
            color:"#fff",
            display:"flex",
            gap:"20px"
        }}>

            <Link to="/" style={{color:"#fff",textDecoration:"none"}}>
            DashBoard
            </Link>

            <Link to="/new" style={{color:"fff",textDecoration:"none"}}>
            NewReview
            </Link>

        </div>
    );
};

export default Navbar;