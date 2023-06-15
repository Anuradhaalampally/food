import React from "react";
import {Link} from 'react-router-dom';
import firstimg from '../images/pizza.jpeg';
import '../styles/home.css';
function Home(){
    return(
        <div className="home" style={{ backgroundImage: `url(${firstimg})`}}>
            <div className="headerContainer">
                <h1>huskey's PiZZeria</h1>
                <p>PIZZA TO FIT ANY TASTE</p>
                <Link to="/login">
                    <button>ORDER NOW</button>
                </Link>
            </div>
        </div>
    )
}
export default Home;