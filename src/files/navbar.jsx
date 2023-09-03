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
let color = "#DAFFFB"

function Navbar() {
    return (
        <div id='navbar'>
            <div id='addDiv'>
                <button id='add'>+</button>
            </div>
            <div className='sides' id='sidesLeft'>
                <ul>
                    <li id='home'>
                        <div className="icon-container">
                            <HomeSvg width={"40"} height={"40"} color={color} className="svg" />
                            <span className="link">Home</span>
                        </div>
                        <Link to="/" className='link'>Home</Link>
                    </li>
                    <li id='food'>
                        <div className="icon-container">
                            <FoodSvg width={"40"} height={"40"} color={color} className="svg" />
                            <span className="link">Food</span>
                        </div>
                        <Link to="/food" className='link' id='food'>Food</Link>
                    </li>
                </ul>
            </div>
            <div className='sides' id='sidesRight'>
                <ul>
                    <li id='workout'>
                        <div className="icon-container">
                            <WorkoutSvg width={"40"} height={"40"} color={color} className="svg" />
                            <span className="link">Workout</span>
                        </div>
                        <Link to="/workout" className='link' id='workout'>Workout</Link>
                    </li>
                    <li id='you'>
                        <div className="icon-container">
                            <YouSvg width={"40"} height={"40"} color={color} className="svg" />
                            <span className="link">You</span>
                        </div>
                        <Link to="/you" className='link' id='you'>You</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
