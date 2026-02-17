import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import NewReview from "./pages/NewReview";
import Navbar from "./components/layout/Navbar";

function App(){
  return(
    <BrowserRouter>

    <Navbar/>
    <Routes>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="/new" element={<NewReview/>}/>
    </Routes>
    
    
    </BrowserRouter>
  );
}

export default App;