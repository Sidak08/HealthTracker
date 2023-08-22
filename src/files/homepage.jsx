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

const initialData = {
    labels: [
        "workout",
        "sleep",
        "water",
        "food"
    ],
    datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 90, 81],
        fill: true,
    }]
};


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
                        borderWidth: 3
                    }
                },
            },
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
            <div>
                <canvas id='graph' ref={canvasRef}></canvas>
            </div>
            {/* <button onClick={upDateGraph}>Click</button> */}
        </>
    );
}

export default HomePage