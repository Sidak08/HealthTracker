import ReactDOM from 'react-dom/client'
import react, { useState, useEffect, useRef } from 'react'
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

let name = "John"

const initialData = {
    labels: ['Macros', 'Calories', 'Water', "Sleep"],
    datasets: [
        {
            label: 'Today',
            data: [1, 5, 3, 4],
            backgroundColor: 'rgba(23, 107, 135, 0)',
            borderColor: "rgb(23, 107, 135)",
        }, {
            label: 'Yesterday',
            data: [3, 1, 2, 7],
            backgroundColor: 'rgba(218, 255, 251, 0)',
            borderColor: "rgb(218, 255, 251)",
        }
    ]
};




function HomePage() {
    return (
        <div id='homePage'>
            {/* <Svg /> */}
            <Greeting />
            <Graph />
            <Stats protein={14} fat={15} suger={34} calories={1300} sleep={10} water={500} />
            <Navbar />
        </div>

    )
}

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
                            color: 'rgb(100, 204, 197)',
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
                            color: 'rgb(218, 255, 251)',
                            font: {
                                size: 14
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

export default HomePage

//make the entire colour schme editable
