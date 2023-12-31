import ReactDOM from 'react-dom/client'
import react, { useState, useEffect, useRef, createContext, useContext } from 'react'
import Navbar from "./navbar"
import "./homepage.css"
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
import { FlagSvg, FoodSvg, WorkoutSvg, StepsSvg, ClockSvg, FireSvg } from "./Svg"
import { Bar } from 'react-chartjs-2';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { unstable_createStyleFunctionSx } from '@mui/system'
import { userDataContext } from '../App'; // Adjust the path as needed
import { Line } from 'react-chartjs-2';
const Greeting = () => {
    let weatherData = {}
    let longitude = ""
    let latitude = ""
    const weatherUrl = `http://api.weatherapi.com/v1/current.json?key=${weatherAPI}&q=${latitude},${longitude}&aqi=yes`;
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const emojis = ["👋", "🌞", "🙌", "👍", "🎉", "😊", "👋🏼", "😃", "🤗", "✨"];
    const greetingEmojis = emojis[Math.floor(Math.random() * emojis.length)]

    let today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    let greeting = today.getHours < 12 ? "morning" : (today.getHours < 18 ? "afternoon" : "evening");

    function getWeekday(dateStr) {
        const dateObj = new Date(dateStr);
        const weekdayIndex = dateObj.getDay();
        return daysOfWeek[weekdayIndex];
    }
    const weekday = getWeekday(date.toString());

    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
            function (position) {
                latitude = position.coords.latitude;
                longitude = position.coords.longitude;
                weatherReport()
            },
            function (error) {
                console.error("Error getting location:", error);
                // program from an error svg
            }
        );
    } else {
        console.log("Geolocation is not available.");
    }

    const weatherReport = () => {
        fetch("http://api.weatherapi.com/v1/current.json?key=b999e6d992fd4574a81202635232208&q=43.6851491,-79.8468381&aqi=yes")
            .then((res) => res.json())
            .then((Data) => {
                weatherData = Data
                useWeather(`https:${weatherData.current.condition.icon}`)
            })
            .catch((err) => { console.log(err) })
    }

    const [weather, useWeather] = useState(sun)

    return (

        <div id='greeting'>
            <h1>{`Good ${greeting}, ${name} ${greetingEmojis}`}</h1>
            <div id='subHeading'> <img src={weather} alt="weatherData" srcSet="" /> <h2>{` ${today.getDate()} ${months[today.getMonth()]}`}</h2></div>
        </div>
    )


}
const TodayGoal = () => {
    const [height, width] = [30, 30]
    const healthHeartStyle = {}

    const { userData, setUserData } = useContext(userDataContext);
    console.log(userData)
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
                    <div className="slide" id='calories'>
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
                    <div className="slide" id='macros'>
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
                    <div className="slide" id='healthyHeartSlide'>
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
                    <div className="slide" id='lowCarbSlide'>
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
const StepsExercise = () => {
    const { userData, setUserData } = useContext(userDataContext)
    const [exerciseTime, setExerciseTime] = useState(10);

    useEffect(() => {
        let totalExerciseTime = 0; // Initialize with the default value

        for (let i = 0; i < userData.dailySummary[0].exercise.length; i++) {
            totalExerciseTime += userData.dailySummary[0].exercise[i].caloriesBurned;
        }

        setExerciseTime(totalExerciseTime);
    }, [userData.dailySummary]);

    return (
        <div id='stepsExercise'>
            <div id='steps' className='bottomBox'>
                <div className='headingBottomBox'>
                    <h3>Steps</h3>
                </div>
                <div>
                    <StepsSvg width={40} height={40} color="#EA3762" />
                    <h2>{userData.dailySummary[0].stepsTaken}</h2>
                </div>
                <div id='goal'>
                    <h4>Goal: {userData.dailySummary[0].stepsTaken} Steps</h4>
                    <LinearProgress variant="determinate" value={(userData.dailySummary[0].stepsTaken / userData.goals.stepGoal) * 100} id="stepsGoalBar" color='inherit' />
                </div>
            </div>

            <div id='exercise' className='bottomBox'>
                <div className='headingBottomBox'>
                    <h3>Exercise</h3>
                </div>
                <div>
                    <div id='caloriesBottomDiv' className='bottomDivArag'>
                        <FireSvg width={30} height={30} color="#F99B32" />
                        <h4>{userData.dailySummary[0].caloriesBurned} cal</h4>
                    </div>
                    <div id='timeBottomDiv' className='bottomDivArag'>
                        <ClockSvg width={30} height={30} color="#F99B32" />
                        <h4>{exerciseTime}: min</h4>
                    </div>
                </div>
            </div>
        </div>
    )

}
const WeightStepsStrength = () => {
    const { userData, setUserData } = useContext(userDataContext)
    useEffect(() => {
        const sliderContent = document.querySelector('#newSlides');

        const caloriesSlideButton = document.querySelector("#strengthSlideButton")
        const macrosSlideButton = document.querySelector("#weightSlideButton")
        const healthyHeartSlideButton = document.querySelector("#stepsSlideButton")

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
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
            {
                label: 'Line 1',
                data: [userData.dailySummary[0].strengthGoals.pushUp, userData.dailySummary[1].strengthGoals.pushUp, userData.dailySummary[2].strengthGoals.pushUp, userData.dailySummary[3].strengthGoals.pushUp, userData.dailySummary[4].strengthGoals.pushUp, userData.dailySummary[5].strengthGoals.pushUp, userData.dailySummary[6].strengthGoals.pushUp],
                borderColor: '#64ccc5',
                borderWidth: 2,
                fill: false
            },
            {
                label: 'Line 2',
                data: [userData.dailySummary[0].strengthGoals.sitUp, userData.dailySummary[1].strengthGoals.sitUp, userData.dailySummary[2].strengthGoals.sitUp, userData.dailySummary[3].strengthGoals.sitUp, userData.dailySummary[4].strengthGoals.sitUp, userData.dailySummary[5].strengthGoals.sitUp, userData.dailySummary[6].strengthGoals.sitUp],
                borderColor: '#f99b32',
                borderWidth: 2,
                fill: false
            },
            {
                label: 'Line 2',
                data: [userData.dailySummary[0].strengthGoals.squat, userData.dailySummary[1].strengthGoals.squat, userData.dailySummary[2].strengthGoals.squat, userData.dailySummary[3].strengthGoals.squat, userData.dailySummary[4].strengthGoals.squat, userData.dailySummary[5].strengthGoals.squat, userData.dailySummary[6].strengthGoals.squat],
                borderColor: '#ea3762',
                borderWidth: 2,
                fill: false
            }
        ]
    };
    const options = {
        scales: {
            x: {
                display: false,  // Hide the x-axis
            },
            y: {
                display: false,  // Hide the y-axis
                min: 0
            },
        },
        plugins: {
            title: {
                display: false  // Hide the title
            },
            legend: {
                display: false  // Hide the legend
            }
        }, elements: {
            point: {
                pointRadius: 0   // Hide data points
            }
        }
    }

    const weightGraphData = {
        labels: [userData.dailySummary[0].date.slice(-5), userData.dailySummary[1].date.slice(-5), userData.dailySummary[2].date.slice(-5), userData.dailySummary[3].date.slice(-5), userData.dailySummary[4].date.slice(-5)],
        datasets: [
            {
                label: 'Line 1',
                data: [userData.dailySummary[0].weight, userData.dailySummary[1].weight, userData.dailySummary[2].weight, userData.dailySummary[3].weight, userData.dailySummary[4].weight, userData.dailySummary[5].weight, userData.dailySummary[6].weight],
                borderColor: '#64ccc5',
                borderWidth: 2,
                fill: false
            },
        ]
    }
    const weightGraphOption = {
        scales: {
            x: {
                display: true,  // Hide the x-axis
            },
            y: {
                display: true,  // Hide the y-axis
                min: 0
            },
        },
        plugins: {
            title: {
                display: false  // Hide the title
            },
            legend: {
                display: false  // Hide the legend
            }
        }, elements: {
            point: {
                pointRadius: 3   // Hide data points
            }
        }
    }

    const stepsGraphData = {
        labels: [userData.dailySummary[0].date.slice(-5), userData.dailySummary[1].date.slice(-5), userData.dailySummary[2].date.slice(-5), userData.dailySummary[3].date.slice(-5), userData.dailySummary[4].date.slice(-5)],
        datasets: [
            {
                label: 'Line 1',
                data: [userData.dailySummary[0].stepsTaken, userData.dailySummary[1].stepsTaken, userData.dailySummary[2].stepsTaken, userData.dailySummary[3].stepsTaken, userData.dailySummary[4].stepsTaken, userData.dailySummary[5].stepsTaken, userData.dailySummary[6].stepsTaken],
                borderColor: '#64ccc5',
                borderWidth: 2,
                fill: false
            },
        ]
    }

    return (
        <div id="weightStepSlider">
            <div id='bottomArrowSlides'>
                <button className="arrow left">&lt;</button>
                <div id="newSlides">
                    <div className="slide bottomSlider" id='weightSlide'>
                        <div id="bottomSliderHeading">
                            <h1>Weight</h1>
                            <h3>last 5 days</h3>
                        </div>
                        <div>
                            <Line data={weightGraphData} options={weightGraphOption} id="strengthGraph" style={{ width: "100%", height: "100%" }} />
                        </div>
                    </div>
                    <div className="slide bottomSlider" id='stepsSlide'>
                        <div id="bottomSliderHeading">
                            <h1>Steps</h1>
                            <h3>last 5 days</h3>
                        </div>
                        <div>
                            <Bar data={stepsGraphData} options={weightGraphOption} />
                        </div>
                    </div>
                    <div className="slide bottomSlider" id='strengthSlide'>
                        <div id="strengthSlideTitle">
                            <div>Squat</div>
                            <div>PushUp</div>
                            <div>SitUp</div>
                        </div>
                        <Line data={data} options={options} id="strengthGraph" style={{ width: "100%", height: "100%" }} />
                    </div>
                </div>
                <button className="arrow right">&gt;</button>
            </div>
            <div id='bottomMovementDiv'>
                <button className='moveButton ' id='strengthSlideButton'></button>
                <button className='moveButton ' id='weightSlideButton'></button>
                <button className='moveButton ' id='stepsSlideButton'></button>
            </div>
        </div>
    );

}


function HomePage() {
    return (
        <div id='homePage'>
            <Greeting />
            <TodayGoal />
            <StepsExercise />
            <WeightStepsStrength />
            <Navbar />
        </div>

    )
}

export default HomePage



function Stats({ protein, fat, suger, calories, sleep, water }) {
    const [count, setCount] = useState({ protein, fat, suger, calories, sleep, water });
    return (
        <div id='stats'>
            <div className='div' id='topDiv'>
                <div className='box'>
                    <div className='text'>
                        <div id='macros' >
                            <h3>{count.protein + "|"}</h3>
                            <h3>{count.fat + "|"}</h3>
                            <h3>{count.suger + "| g"}</h3>
                        </div>
                        <h4>Pro | Fat | Sug</h4>
                    </div>
                    <img src={thunder} alt="" className='statsIcon' />
                </div>
                <div className='box'>
                    <div className="text">
                        <div id='sleep' >
                            <h3>{count.sleep + " H"}</h3>
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
                            <h3>{count.calories + " kcal"}</h3>
                        </div>
                        <h4>Calories Consumed</h4>
                    </div>
                    <img src={fire} alt="" className='statsIcon' />
                </div>
                <div className='box'>
                    <div className='text'>
                        <div id='water' >
                            <h3>{count.water + " ML"}</h3>
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
    const canvasRef = useRef(null);
    const [data, setData] = useState(initialData);
    const [chartInstance, setChartInstance] = useState(null);

    useEffect(() => {
        const ctx = canvasRef.current;

        if (chartInstance) {
            // If a chart instance already exists, destroy it before creating a new one
            chartInstance.destroy();
        }

        const newChartInstance = new Chart(ctx, {
            type: 'radar',
            data: data,
            options: {
                elements: {
                    line: {
                        borderWidth: 2.5
                    }
                }, scales: {
                    r: {
                        grid: {
                            color: 'rgb(227, 16, 83)',
                            // circular: true,
                            lineWidth: 1.5,
                        },
                        ticks: {
                            color: "rgba(0, 0, 0, 0)",
                            backdropColor: 'rgba(0, 0, 0, 0)',
                            stepSize: 1,
                            count: 8,
                            drawTicks: false,
                        }, pointLabels: {
                            color: '#9cffed',
                            font: {
                                size: 16
                            },
                        }, title: {
                            display: false,

                        }
                    },
                }
            }

        });

        setChartInstance(newChartInstance); // Store the new chart instance

        return () => {
            // Clean up by destroying the chart instance when the component unmounts
            if (chartInstance) {
                chartInstance.destroy();
            }
        };
    }, [data]);

    // const upDateGraph = () => {
    //     setData(prevData => ({
    //         ...prevData,
    //         labels: prevData.labels.map((label, index) => (index === 1 ? "bi" : label))
    //     }));
    // };

    return (
        <>
            <div id='graphDiv'>
                <canvas id='graph' ref={canvasRef}></canvas>
            </div>
            {/* <button onClick={upDateGraph}>Click</button> */}
        </>
    );

};
const initialData = {
    labels: ['Macros', 'Calories', 'Water', "Sleep", "weight"],
    datasets: [
        {
            label: 'Today',
            data: [1, 4, 6, 3, 6],
            backgroundColor: 'rgba(16, 227, 157, 0.3)',
            borderColor: "rgb(16, 227, 157)",
        }, {
            label: 'Yesterday',
            data: [5, 2, 3, 7, 1],
            backgroundColor: "rgba(16, 213, 227 0.3)",
            borderColor: "rgb(16, 213, 227)",
        }
    ]
};
const HorizontalBarChart = () => {
    const data = {
        labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4'],
        datasets: [
            {
                label: 'Horizontal Bar Chart',
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: [5, 10, 8, 15],
            },
        ],
    };

    const options = {
        indexAxis: 'y', // Set the axis to 'y' for a horizontal bar chart
        scales: {
            x: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <Bar data={data} options={options} />
        </div>
    );
};
