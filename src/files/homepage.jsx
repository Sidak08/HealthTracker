import ReactDOM from 'react-dom/client'
import react, { useState, useEffect, useRef, createContext, useContext } from 'react'
import Navbar from "./navbar"
import "./homepage.css"
import "./navbar.css"
import Chart from 'chart.js/auto'
import waterIcon from "../assets/stats/glass-2.png"
import thunder from "../assets/stats/vector 4.png"
import sleepIcon from "../assets/stats/zzz-sleep-symbol.png"
import fire from "../assets/stats/icons8-fire-50-2.png"
import weatherAPI from "./secret.jsx"
import axios from 'axios';
import sun from "../assets/weatherIcon/Group 1-2.svg"
import { FlagSvg } from "./Svg"
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
let blankUserData = {
    "user": {
        "name": "blankData",
        "age": 0,
        "weight": 0, // in kilograms
        "height": 0, // in centimeters
        "gender": ""
    },
    "goals": {
        "caloriesGoal": 0, // daily calorie intake goal
        "proteinGoal": 0, // daily protein intake goal (in grams)
        "carbohydrateGoal": 0, // daily carbohydrate intake goal (in grams)
        "fatGoal": 0, // daily fat intake goal (in grams)
        "sugarGoal": 0, // daily sugar intake goal (in grams)
        "ironGoal": 0 // daily iron intake goal (in milligrams)
    },
    "dailySummary": [
        {
            "date": "",
            "caloriesConsumed": 0,
            "caloriesBurned": 0,
            "exercise": [
                {
                    "name": "",
                    "duration": "",
                    "caloriesBurned": 0
                },
                {
                    "name": "",
                    "duration": "",
                    "caloriesBurned": 0
                }
            ],
            "macrosConsumed": {
                "protein": 0,
                "carbohydrate": 0,
                "fat": 0,
                "sugar": 0, // grams
                "iron": 0 // milligrams
            }
        },
        {
            "date": "",
            "caloriesConsumed": "",
            "caloriesBurned": "",
            "exercise": [
                {
                    "name": "",
                    "duration": "",
                    "caloriesBurned": ""
                }
            ],
            "macrosConsumed": {
                "protein": "",
                "carbohydrate": "",
                "fat": "",
                "sugar": "", // grams
                "iron": "" // milligrams
            }
        }
        // ... add more daily summaries for different dates
    ]
}
const greetingEmojis = emojis[Math.floor(Math.random() * emojis.length)]


const TodayGoal = () => {
    const [height, width] = [30, 30]
    const [userData, setUserData] = useState(blankUserData);
    const [goal, setGoal] = useState()

    const calorieChartData = {
        labels: [
        ],
        datasets: [{
            label: "",
            data: [userData.goals.caloriesGoal - userData.dailySummary[0].caloriesConsumed, userData.dailySummary[0].caloriesBurned, userData.dailySummary[0].caloriesConsumed],
            backgroundColor: [
                'rgba(255, 99, 132, 0.3)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
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
                'rgba(255, 99, 132, 0.3)',
                'rgb(54, 162, 235)',
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
                'rgba(255, 99, 132, 0.3)',
                'rgb(54, 162, 235)',
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
                'rgba(255, 99, 132, 0.3)',
                'rgb(54, 162, 235)',
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

    useEffect(() => {
        axios.post('http://localhost:3000/home', {})
            .then(response => {
                // Handle the successful response
                // console.log('Response:', response.data);
                setUserData(response.data);
            })
            .catch(error => {
                // Handle the error
                console.error('Error:', error);
            });
    }, [])
    useEffect(() => {
        const sliderContent = document.querySelector('#slides');
        const leftArrow = document.querySelector('.arrow.left');
        const rightArrow = document.querySelector('.arrow.right');

        leftArrow.addEventListener('click', () => {
            sliderContent.scrollLeft -= 200;
        });

        rightArrow.addEventListener('click', () => {
            sliderContent.scrollLeft += 200;
        });

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
    }, []);

    const buildGraph = (graphDataRef, chartInstanceThing, setChartInstanceThing, data) => {
        const ctx = graphDataRef.current;
        if (chartInstanceThing) {
            chartInstanceThing.destroy();
        }
        const newCaloriesChartInstance = new Chart(ctx, {
            type: 'doughnut',
            data: data,
            options: {
                cutout: "80%"
            }
        });
        setChartInstanceThing(newCaloriesChartInstance);
        return () => {
            if (chartInstance) {
                chartInstance.destroy();
            }
        };
    }
    useEffect(() => {
        buildGraph(caloriesRef, chartInstance, setChartInstance, calorieChartData)
        buildGraph(carbohydrateGraphRef, carbohydrateGraph, setCarbohydrateGraph, carbohydrateGraphData)
        buildGraph(fatGraphRef, fatGraph, setFatGraph, fatGraphData)
        buildGraph(proteinGraphRef, proteinGraph, setProteinGraph, proteinGraphData)
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
                            <div id='circleChart' style={{ width: '90%', height: '90%' }}>
                                <canvas id='caloriesChart' ref={caloriesRef}></canvas>
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
                                        <FlagSvg width={width} height={height} color="#DAFFFB" />
                                    </div>
                                    <div className='iconText'>
                                        <h5>Food</h5>
                                        {userData.dailySummary[1].caloriesConsumed}
                                    </div>
                                </div>

                                <div id='goal' className='textBox'>
                                    <div className='slideIcon'>
                                        <FlagSvg width={width} height={height} color="#DAFFFB" />
                                    </div>
                                    <div className='iconText'>
                                        <h5>Food</h5>
                                        {userData.dailySummary[1].caloriesConsumed}
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
                                    <h3>Carbohydrates</h3>
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
                                    <h3>Fat</h3>
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
                                    <h3>Protein</h3>
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
                    <div className="slide">
                    </div>
                    <div className="slide">
                    </div>
                </div>
                <button className="arrow right">&gt;</button>
            </div>
            <div id='movementDiv'>
                <button className='moveButton'></button>
                <button className='moveButton'></button>
                <button className='moveButton'></button>
                <button className='moveButton'></button>
            </div>
        </div>
    );
}

const Greeting = () => {
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
function HomePage() {
    return (
        <div id='homePage'>
            <Greeting />
            <TodayGoal />
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

