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
            <div className='sides' id='sidesLeft'>
                <Link to="/" className='link'>
                    <HomeSvg width={"40"} height={"40"} color={color} className="svg" />
                </Link>
                <Link to="/food" className='link' id='food'>
                    <FoodSvg width={"40"} height={"40"} color={color} className="svg" />

                </Link>
            </div>
            <button id='add'>+</button>
            <div className='sides' id='sidesRight'>
                <Link to="/workout" className='link' id='workout'>
                    <WorkoutSvg width={"40"} height={"40"} color={color} className="svg" />
                </Link>
                <Link to="/you" className='link' id='you'>
                    <YouSvg width={"40"} height={"40"} color={color} className="svg" />
                </Link>
            </div>
        </div>
    );
}

export default Navbar;
