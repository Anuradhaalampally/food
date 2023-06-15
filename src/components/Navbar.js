import ilogo from '../images/pizzaLogo.png';
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css';
import {Link} from 'react-router-dom';
import React,{useState,useEffect} from 'react';
function Navbar() {
    const [openLinks, setOpenLinks] = useState(false);
  
    const toggleNavbar = () => {
      setOpenLinks(!openLinks);
    };
    useEffect(()=>{
        const handleResize=()=>{
            if(window.innerWidth<600 && openLinks){
                setOpenLinks(false);
            }
        };
        window.addEventListener("resize",handleResize);
        return () => window.removeEventListener("resize",handleResize);
},[openLinks]);
    return (
      <div className="navbar">
        <div className="leftSide" id={openLinks ? "open" : "close"}>
          <img src={ilogo} alt='Not found'/>
          <div className="hiddenLinks">
            <Link to="/"> Home </Link>
            <Link to="/menu"> Menu </Link>
            <Link to="/about"> About </Link>
            <Link to="/contact"> Contact </Link>
            <Link to="/login">Login</Link>
          </div>
        </div>
        <div className="rightSide">
          <Link to="/"> Home </Link>
          <Link to="/menu"> Menu </Link>
          <Link to="/about"> About </Link>
          <Link to="/contact"> Contact </Link>
          <Link to="/login">Login</Link>
          <button onClick={toggleNavbar}>
            <ReorderIcon />
          </button>
        </div>
      </div>
    );
  }
  
  export default Navbar;
  