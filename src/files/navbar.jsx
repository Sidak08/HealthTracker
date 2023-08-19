import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css"
import navbarDesignSvg from "../assets/vector 1.svg"
import home from "../assets/Home.png"
import food from "../assets/Food.png"
import workout from "../assets/Workout.png"
import you from "../assets/Profile.png"

function Navbar() {
    return (
        <div id='navbar'>
            <img src={navbarDesignSvg} alt="" srcSet="" id='navBarSvg' />
            <div id='addDiv'>
                <button id='add'>+</button>
            </div>
            <div className='sides' id='sidesLeft'>
                <ul>
                    <li>
                        <img src={home} alt="" />
                        <Link to="/" className='link'>Home</Link>
                    </li>
                    <li>
                        <img src={food} alt="" />
                        <Link to="/food" className='link'>Food</Link>
                    </li>
                </ul>
            </div>
            <div className='sides' id='sidesRight'>
                <ul>
                    <li>
                        <img src={workout} alt="" />
                        <Link to="/workout" className='link'>Workout</Link>
                    </li>
                    <li>
                        <img src={you} alt="" />
                        <Link to="/you" className='link'>You</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar