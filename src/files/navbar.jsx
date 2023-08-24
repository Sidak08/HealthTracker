import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css"
import "./homepage.css"
import navbarDesignSvg from "../assets/navbar/navbarLine.svg"
import home from "../assets/navBar/Home.svg"
import food from "../assets/navBar/Food.svg"
import workout from "../assets/navBar/Work.svg"
import you from "../assets/navBar/you.svg"
import { FoodSvg, HomeSvg, NavbarLineSvg, WorkoutSvg, YouSvg } from "./Svg"


function Navbar() {
    return (
        <div id='navbar'>
            <div id='navBarSvgDiv'>
                <NavbarLineSvg id="navBarSvg" />
            </div>
            <div id='addDiv'>
                <button id='add'>+</button>
            </div>
            <div className='sides' id='sidesLeft'>
                <ul>
                    <li>
                        <HomeSvg />
                        <Link to="/" className='link'>Home</Link>
                    </li>
                    <li>
                        <FoodSvg />
                        <Link to="/food" className='link'>Food</Link>
                    </li>
                </ul>
            </div>
            <div className='sides' id='sidesRight'>
                <ul>
                    <li>
                        <WorkoutSvg />
                        <Link to="/workout" className='link'>Workout</Link>
                    </li>
                    <li>
                        <YouSvg />
                        <Link to="/you" className='link'>You</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar