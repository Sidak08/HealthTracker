import ReactDOM from 'react-dom/client'
import react, { useState, useEffect, useRef, createContext, useContext } from 'react'
import Navbar from "./navbar"
import "./food.css"
import "./navbar.css"
import Chart from 'chart.js/auto'
import 'chart.js/auto'; // Import 'chart.js/auto' instead of 'chart.js'
import waterIcon from "../assets/stats/glass-2.png"
import thunder from "../assets/stats/vector 4.png"
import sleepIcon from "../assets/stats/zzz-sleep-symbol.png"
import fire from "../assets/stats/icons8-fire-50-2.png"
import weatherAPI from "./secret.jsx"
import axios from 'axios';
import sun from "../assets/weatherIcon/Group 1-2.svg"
import { FlagSvg, FoodSvg, WorkoutSvg, StepsSvg, ClockSvg, FireSvg, SearchBarSvg, BarcodeSvg, CreateMealSvg, CreateFoodSvg } from "./Svg"
import { Bar } from 'react-chartjs-2';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { unstable_createStyleFunctionSx } from '@mui/system'
import { userDataContext } from '../app'; // Adjust the path as needed
import { Line } from 'react-chartjs-2';

const TodayGoal = () => {

    const [height, width] = [30, 30]
    const healthHeartStyle = {}

    const { userData, setUserData } = useContext(userDataContext);
    const [goal, setGoal] = useState()

    const calorieChartOption = {
        cutout: "85%",
        borderColor: "none"
    }
    const macrosChartOption = {
        cutout: "84%",
        borderColor: "none"
    }

    const calorieChartData = {
        labels: [
        ],
        datasets: [{
            label: "",
            data: [userData.goals.caloriesGoal - userData.dailySummary[0].caloriesConsumed, userData.dailySummary[0].caloriesBurned, userData.dailySummary[0].caloriesConsumed],
            backgroundColor: [
                'rgba(218, 255, 251, 0.3)',
                "#ef8731",
                '#206af4'
            ],
            hoverOffset: 4
        }]
    };
    const carbohydrateGraphData = {
        labels: [
        ],
        datasets: [{
            label: "",
            data: [userData.goals.carbohydrateGoal - userData.dailySummary[0].macrosConsumed.carbohydrate, userData.dailySummary[0].macrosConsumed.carbohydrate],
            backgroundColor: [
                'rgba(89, 208, 198, 0.3)',
                'rgb(89, 208, 198)',
            ],
            hoverOffset: 4
        }]
    };
    const fatGraphData = {
        labels: [
        ],
        datasets: [{
            label: "",
            data: [userData.goals.fatGoal - userData.dailySummary[0].macrosConsumed.fat, userData.dailySummary[0].macrosConsumed.fat],
            backgroundColor: [
                'rgba(176, 115, 199, 0.3)',
                'rgb(176, 115, 199)',
            ],
            hoverOffset: 4
        }]
    };
    const proteinGraphData = {
        labels: [
        ],
        datasets: [{
            label: "",
            data: [userData.goals.proteinGoal - userData.dailySummary[0].macrosConsumed.protein, userData.dailySummary[0].macrosConsumed.protein],
            backgroundColor: [
                'rgba(245, 188, 93, 0.3)',
                'rgb(245, 188, 93)',
            ],
            hoverOffset: 4
        }]
    };


    const [chartInstance, setChartInstance] = useState(null);
    const caloriesRef = useRef(null);

    const [carbohydrateGraph, setCarbohydrateGraph] = useState(null);
    const carbohydrateGraphRef = useRef(null);

    const [fatGraph, setFatGraph] = useState(null);
    const fatGraphRef = useRef(null);

    const [proteinGraph, setProteinGraph] = useState(null);
    const proteinGraphRef = useRef(null);

    const [macrosLeft, setMacrosLeft] = useState()

    const buildGraph = (graphDataRef, chartInstanceThing, setChartInstanceThing, data, options) => {
        const ctx = graphDataRef.current;
        if (chartInstanceThing) {
            chartInstanceThing.destroy();
        }
        const newCaloriesChartInstance = new Chart(ctx, {
            type: 'doughnut',
            data: data,
            options: options
        });
        setChartInstanceThing(newCaloriesChartInstance);
        return () => {
            if (chartInstance) {
                chartInstance.destroy();
            }
        };
    }

    useEffect(() => {
        const sliderContent = document.querySelector('#slides');

        const caloriesSlideButton = document.querySelector("#caloriesSlideButton")
        const macrosSlideButton = document.querySelector("#macrosSlideButton")
        const healthyHeartSlideButton = document.querySelector("#healthyHeartSlideButton")
        const lowCarbSlideButton = document.querySelector("#lowCarbSlideButton")

        const leftArrow = document.querySelector('.arrow.left');
        const rightArrow = document.querySelector('.arrow.right');

        const color = {
            "blue": "blue",
            "white": "white"
        }

        leftArrow.addEventListener('click', () => {
            sliderContent.scrollLeft -= 200;
        });

        rightArrow.addEventListener('click', () => {
            sliderContent.scrollLeft += 200;
        });

        caloriesSlideButton.style.backgroundColor = "blue"


        caloriesSlideButton.addEventListener('click', () => {
            sliderContent.scrollLeft = 0;


            caloriesSlideButton.style.backgroundColor = color.blue,
                macrosSlideButton.style.backgroundColor = color.white,
                healthyHeartSlideButton.style.backgroundColor = color.white,
                lowCarbSlideButton.style.backgroundColor = color.white

        })

        macrosSlideButton.addEventListener('click', () => {
            sliderContent.scrollLeft = 300;

            caloriesSlideButton.style.backgroundColor = color.white,
                macrosSlideButton.style.backgroundColor = color.blue,
                healthyHeartSlideButton.style.backgroundColor = color.white,
                lowCarbSlideButton.style.backgroundColor = color.white

        })

        healthyHeartSlideButton.addEventListener('click', () => {
            sliderContent.scrollLeft = 600;

            caloriesSlideButton.style.backgroundColor = color.white,
                macrosSlideButton.style.backgroundColor = color.white,
                healthyHeartSlideButton.style.backgroundColor = color.blue,
                lowCarbSlideButton.style.backgroundColor = color.white

        })


        lowCarbSlideButton.addEventListener('click', () => {
            sliderContent.scrollLeft = 1200;

            caloriesSlideButton.style.backgroundColor = color.white,
                macrosSlideButton.style.backgroundColor = color.white,
                healthyHeartSlideButton.style.backgroundColor = color.white,
                lowCarbSlideButton.style.backgroundColor = color.blue


        })


        let startX;
        let scrollLeft;

        sliderContent.addEventListener('touchstart', (e) => {
            startX = e.touches[0].pageX;
            scrollLeft = sliderContent.scrollLeft;
        });

        sliderContent.addEventListener('touchmove', (e) => {
            const x = e.touches[0].pageX;
            const walk = (x - startX) * 2;
            sliderContent.scrollLeft = scrollLeft - walk;
        });

        let isDown = false;

        sliderContent.addEventListener('mousedown', (e) => {
            isDown = true;
            startX = e.pageX;
            scrollLeft = sliderContent.scrollLeft;
        });

        sliderContent.addEventListener('mouseleave', () => {
            isDown = false;
        });

        sliderContent.addEventListener('mouseup', () => {
            isDown = false;
        });

        sliderContent.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX;
            const walk = (x - startX) * 2;
            sliderContent.scrollLeft = scrollLeft - walk;
        });

        const updateButtonStyles = () => {
            const scrollPosition = sliderContent.scrollLeft;
            const buttonMap = {
                0: caloriesSlideButton,
                300: macrosSlideButton,
                600: healthyHeartSlideButton,
                1000: lowCarbSlideButton,
            };

            // Reset all buttons to the default background color
            for (const button of Object.values(buttonMap)) {
                button.style.backgroundColor = color.white;
            }

            // Find the closest button to the current scroll position and highlight it
            const closestButton = Object.keys(buttonMap).reduce((a, b) => {
                return Math.abs(b - scrollPosition) < Math.abs(a - scrollPosition) ? b : a;
            });

            buttonMap[closestButton].style.backgroundColor = color.blue;
        };

        // Attach a scroll event listener to the slider content
        sliderContent.addEventListener('scroll', updateButtonStyles);

        // Attach a touchend event listener to update button styles after a swipe
        sliderContent.addEventListener('touchend', updateButtonStyles);

        // Clean up the event listeners when the component unmounts
        return () => {
            sliderContent.removeEventListener('scroll', updateButtonStyles);
            sliderContent.removeEventListener('touchend', updateButtonStyles);
        };

    }, []);
    useEffect(() => {
        buildGraph(caloriesRef, chartInstance, setChartInstance, calorieChartData, calorieChartOption)
        buildGraph(carbohydrateGraphRef, carbohydrateGraph, setCarbohydrateGraph, carbohydrateGraphData, macrosChartOption)
        buildGraph(fatGraphRef, fatGraph, setFatGraph, fatGraphData, macrosChartOption)
        buildGraph(proteinGraphRef, proteinGraph, setProteinGraph, proteinGraphData, macrosChartOption)
    }, [userData])

    return (
        <div id="todaySlider">
            <div id='arrowSlides'>
                <button className="arrow left">&lt;</button>
                <div id="slides">
                    <div className="foodSlide slide" id='calories'>
                        <div className='heading'>
                            <h2>Calories</h2>
                            <h4>Remaining = Goal - Food + Exercise</h4>
                        </div>
                        <div id='graph'>
                            <div style={{ width: '90%', height: '90%' }} id="circleGraphChartDiv">
                                <div id='circleChart' style={{ width: '100%', height: '100%' }}>
                                    <canvas id='caloriesChart' ref={caloriesRef}></canvas>
                                </div>
                                <div id='circleGraphText'>
                                    <h1>{userData.goals.caloriesGoal - userData.dailySummary[0].caloriesConsumed}</h1>
                                    <h2>Remaining</h2>
                                </div>
                            </div>
                            <div id='text'>
                                <div id='goal' className='textBox'>
                                    <div className='slideIcon'>
                                        <FlagSvg width={width} height={height} color="#DAFFFB" />
                                    </div>
                                    <div className='iconText'>
                                        <h5>Base Goal</h5>
                                        {userData.goals.caloriesGoal}
                                    </div>
                                </div>

                                <div id='goal' className='textBox'>
                                    <div className='slideIcon'>
                                        <FoodSvg width={width} height={height} color="#206af4" />
                                    </div>
                                    <div className='iconText'>
                                        <h5>Food</h5>
                                        {userData.dailySummary[0].caloriesConsumed}
                                    </div>
                                </div>

                                <div id='goal' className='textBox'>
                                    <div className='slideIcon'>
                                        <WorkoutSvg width={width} height={height} color="#ef8731" />
                                    </div>
                                    <div className='iconText'>
                                        <h5>Exercise</h5>
                                        {userData.dailySummary[0].caloriesBurned}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="foodSlide slide" id='macros'>
                        <div className='heading'>
                            <h2>Macros</h2>
                        </div>
                        <div className='macrosGraph'>
                            <div className='macrosGraphCircle'>
                                <div className='headingCircleChart'>
                                    <h3 id='Carbohydrates'>Carbohydrates</h3>
                                </div>
                                <div className='circleChartDiv'>
                                    <div className='circleChart' style={{ width: '90%', height: '90%' }}>
                                        <canvas className='caloriesChart' ref={carbohydrateGraphRef}></canvas>
                                    </div>
                                    <div className='macrosGraphText'>
                                        <h4>{userData.dailySummary[0].macrosConsumed.carbohydrate}</h4>
                                    </div>
                                </div>
                                <div className='macrosLeft'>
                                    <h5>{userData.goals.carbohydrateGoal - userData.dailySummary[0].macrosConsumed.carbohydrate}g Left</h5>
                                </div>
                            </div>

                            <div className='macrosGraphCircle'>
                                <div className='headingCircleChart'>
                                    <h3 id='fat'>Fat</h3>
                                </div>
                                <div className='circleChartDiv'>
                                    <div className='circleChart' style={{ width: '90%', height: '90%' }}>
                                        <canvas className='caloriesChart' ref={fatGraphRef}></canvas>
                                    </div>
                                    <div className='macrosGraphText'>
                                        <h4>{userData.dailySummary[0].macrosConsumed.fat}</h4>
                                    </div>
                                </div>
                                <div className='macrosLeft'>
                                    <h5>{userData.goals.fatGoal - userData.dailySummary[0].macrosConsumed.fat}g Left</h5>
                                </div>
                            </div>

                            <div className='macrosGraphCircle'>
                                <div className='headingCircleChart'>
                                    <h3 id="protein">Protein</h3>
                                </div>
                                <div className='circleChartDiv'>
                                    <div className='circleChart' style={{ width: '90%', height: '90%' }}>
                                        <canvas className='caloriesChart' ref={proteinGraphRef}></canvas>
                                    </div>
                                    <div className='macrosGraphText'>
                                        <h4>{userData.dailySummary[0].macrosConsumed.protein}</h4>
                                    </div>
                                </div>
                                <div className='macrosLeft'>
                                    <h5>{userData.goals.proteinGoal - userData.dailySummary[0].macrosConsumed.protein}g Left</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="foodSlide slide" id='healthyHeartSlide'>
                        <div className='heading'>
                            <h2>Healthy Heart</h2>
                        </div>

                        <div className='barGraphDiv'>
                            <div className='barGraphDivText'>
                                <h4>Fat</h4>
                                <h4>{userData.dailySummary[0].macrosConsumed.fat}/{userData.goals.fatGoal}g</h4>
                            </div>
                            <LinearProgress variant="determinate" value={(userData.dailySummary[0].macrosConsumed.fat / userData.goals.fatGoal) * 100} className="healthyHeartBar" style={healthHeartStyle} />
                        </div>

                        <div className='barGraphDiv'>
                            <div className='barGraphDivText'>
                                <h4>Sodium</h4>
                                <h4>{userData.dailySummary[0].macrosConsumed.sodium}/{userData.goals.sodiumGoal}g</h4>
                            </div>
                            <LinearProgress variant="determinate" value={(userData.dailySummary[0].macrosConsumed.sodium / userData.goals.sodiumGoal) * 100} className="healthyHeartBar" style={healthHeartStyle} />
                        </div>

                        <div className='barGraphDiv'>
                            <div className='barGraphDivText'>
                                <h4>Cholesterol</h4>
                                <h4>{userData.dailySummary[0].macrosConsumed.cholesterol}/{userData.goals.cholesterolGoal}g</h4>
                            </div>
                            <LinearProgress variant="determinate" value={(userData.dailySummary[0].macrosConsumed.cholesterol / userData.goals.cholesterolGoal) * 100} className="healthyHeartBar" style={healthHeartStyle} />
                        </div>
                    </div>
                    <div className="foodSlide slide" id='lowCarbSlide'>
                        <div className='heading'>
                            <h2>Low Carb</h2>
                        </div>

                        <div className='barGraphDiv'>
                            <div className='barGraphDivText'>
                                <h4>Carbohydrate</h4>
                                <h4>{userData.dailySummary[0].macrosConsumed.carbohydrate}/{userData.goals.carbohydrateGoal}g</h4>
                            </div>
                            <LinearProgress variant="determinate" value={(userData.dailySummary[0].macrosConsumed.carbohydrate / userData.goals.carbohydrateGoal) * 100} className="healthyHeartBar" style={healthHeartStyle} />
                        </div>

                        <div className='barGraphDiv'>
                            <div className='barGraphDivText'>
                                <h4>Sugar</h4>
                                <h4>{userData.dailySummary[0].macrosConsumed.sugar}/{userData.goals.sugarGoal}g</h4>
                            </div>
                            <LinearProgress variant="determinate" value={(userData.dailySummary[0].macrosConsumed.sugar / userData.goals.sugarGoal) * 100} className="healthyHeartBar" style={healthHeartStyle} />
                        </div>

                        <div className='barGraphDiv'>
                            <div className='barGraphDivText'>
                                <h4>Fiber</h4>
                                <h4>{userData.dailySummary[0].macrosConsumed.fiber}/{userData.goals.fiberGoal}g</h4>
                            </div>
                            <LinearProgress variant="determinate" value={(userData.dailySummary[0].macrosConsumed.fiber / userData.goals.fiberGoal) * 100} className="healthyHeartBar" style={healthHeartStyle} />
                        </div>

                    </div>
                </div>
                <button className="arrow right">&gt;</button>
            </div>
            <div id='movementDiv'>
                <button className='moveButton' id='caloriesSlideButton'></button>
                <button className='moveButton' id='macrosSlideButton'></button>
                <button className='moveButton' id='healthyHeartSlideButton'></button>
                <button className='moveButton' id='lowCarbSlideButton'></button>
            </div>
        </div>
    );
}
const SearchBar = () => {
    // const handleFocusChange = () => {
    //     if (document.activeElement === SearchBar.current) {

    //     } else {

    //     }
    // };

    // useEffect(() => {
    //     document.addEventListener('focus', handleFocusChange, true);
    //     document.addEventListener('blur', handleFocusChange, true);

    //     return () => {
    //         // Remove event listeners on component unmount
    //         document.removeEventListener('focus', handleFocusChange, true);
    //         document.removeEventListener('blur', handleFocusChange, true);
    //     };
    // }, [])

    return (
        <div className='foodSearchBar'>
            <SearchBarSvg width={20} height={25} color={"#dafffb"} />
            <input type="text" placeholder='Enter Food Item Name' ref={SearchBar} />
            <BarcodeSvg width={30} height={35} color={"#dafffb"} />
        </div>
    )
}
const FoodQuickActions = () => {
    return (
        <div id='foodQuickActionDiv'>
            <div className='quickAction'>
                <BarcodeSvg width={30} height={40} color={"#FCBD43"} />
                <h3>Scan a Barcode</h3>
            </div>
            <div className='quickAction'>
                <CreateMealSvg width={40} height={40} color={"#BB65CB"} />
                <h3>Add a Meal</h3>
            </div>
            <div className='quickAction'>
                <CreateFoodSvg width={35} height={40} color={"#64CCC5"} />
                <h3>Add a Food</h3>
            </div>
        </div>
    )
}
const Food = () => {
    return (
        <div id='foodPage'>
            <SearchBar />
            <FoodQuickActions />
            <TodayGoal />
            <FoodHistory />
            <Navbar />
        </div>
    )
}
const FoodHistory = () => {
    const { userData, setUserData } = useContext(userDataContext);
    return (
        <div id='foodHistory'>
            <FoodItem food={userData.food.recent[0]} className="roundedTop" />
            <FoodItem food={userData.food.recent[1]} className="roundedBottom" />
            <FoodItem food={userData.food.recent[2]} className="roundedTop" />
            <FoodItem food={userData.food.recent[3]} className="roundedBottom" />
            <FoodItem food={userData.food.recent[4]} className="roundedTop" />
            <FoodItem food={userData.food.recent[5]} className="roundedBottom" />
            <FoodItem food={userData.food.recent[6]} className="roundedTop" />
            <FoodItem food={userData.food.recent[7]} className="roundedBottom" />
        </div>
    )

}

const FoodItem = ({ food, className }) => {
    return (
        <div className={`foodBoxLogDiv ${className}`}>
            <div>
                <h1>{food.name}</h1>
                <div>
                    {food.nutritionalValues.calories} cal, {food.nutritionalValues.protein} g, {food.name}
                </div>
            </div>
            <div>
                <button> + </button>
            </div>
        </div>
    )
}

export default Food