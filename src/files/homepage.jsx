import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from "./navbar"
import "./homepage.css"
import "./navbar.css"
import waterIcon from "../assets/stats/glass-2.png"
import thunder from "../assets/stats/vector 4.png"
import sleepIcon from "../assets/stats/zzz-sleep-symbol.png"
import fire from "../assets/stats/icons8-fire-50-2.png"


function HomePage() {
    return (
        <div id='homePage'>
            <Graph />
            <Stats protein={14} fat={15} suger={34} calories={1300} sleep={10} water={500} />
            <Navbar />
        </div>

    )
}

function Stats({ protein, fat, suger, calories, sleep, water }) {
    return (
        <div id='stats'>
            <div className='div' id='topDiv'>
                <div className='box'>
                    <div className='text'>
                        <div id='macros' >
                            <h3>{protein + "|"}</h3>
                            <h3>{fat + "|"}</h3>
                            <h3>{suger + "| g"}</h3>
                        </div>
                        <h4>Pro | Fat | Sug</h4>
                    </div>
                    <img src={thunder} alt="" className='statsIcon' />
                </div>
                <div className='box'>
                    <div className="text">
                        <div id='sleep' >
                            <h3>{sleep + " H"}</h3>
                        </div>
                        <h4>Sleeping Hours</h4>
                    </div>
                    <img src={sleepIcon} alt="" className='statsIcon' id='sleepes' />
                </div>
            </div>
            <div className='div'>
                <div className='box'>
                    <div className='text'>
                        <div id='calories'>
                            <h3>{calories + " kcal"}</h3>
                        </div>
                        <h4>Calories Consumed</h4>
                    </div>
                    <img src={fire} alt="" className='statsIcon' />
                </div>
                <div className='box'>
                    <div className='text'>
                        <div id='water' >
                            <h3>{water + " ML"}</h3>
                        </div>
                        <h4>Water Consumed</h4>
                    </div>
                    <img src={waterIcon} alt="" className='statsIcon' />
                </div>

            </div>
        </div>
    )

}

function Graph() {
    return (
        <div id='graph'>
        </div>
    )
}

export default HomePage