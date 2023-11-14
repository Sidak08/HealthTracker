import ReactDOM from 'react-dom/client'
import react, { useState, useEffect, useRef, createContext, useContext } from 'react'
import Navbar from "./navbar"
import "./workout.css"
import { userDataContext } from '../App';
import { FireSvg, CalenderSvg } from './Svg';
import { Slide } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import LinearProgress from '@mui/material/LinearProgress';

const Workout = () => {

    return (
        <div id="workoutPageDiv">
            <Heading />
            <Slider />
            <BasicWorkOut level="beginner" />
            <BasicWorkOut level="intermediate" />
            <BasicWorkOut level="advanced" />
            <Navbar />
        </div>
    )
}

const Heading = () => {
    const { userData, setUserData } = useContext(userDataContext);

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',];
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    let today = new Date();
    var date = `${months[today.getMonth()]}, ${today.getDate()}`;
    let todayDay = today.getDay()

    return (
        <div id="workoutHeading">
            <h4>{`${daysOfWeek[todayDay]} ${date}`}</h4>
            <h2>HOME WORKOUT</h2>
            <div id="workoutBoxes">
                <div id='workoutStreak'>
                    <div className='workoutBoxHeading'>
                        <h1>{userData.user.streak}</h1>
                        <FireSvg width={25} height={25} color="#ff4520" />
                    </div>
                    <div className='workoutBoxFooter'>
                        <h3>Day Streak</h3>
                        <h4>Personal Best: {userData.user.longestStreak}</h4>
                    </div>
                </div>
                <div id="workoutWeeks">
                    <div className='workoutBoxHeading'>
                        <h1>{userData.user.workoutThisWeek}/7</h1>
                        <CalenderSvg width={25} height={25} color="#ff4520" />
                    </div>
                    <div className='workoutBoxFooter'>
                        <h3>This Week</h3>
                        <h4>In Total: {userData.user.totalWorkout}</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
const Slider = () => {
    const { userData, setUserData } = useContext(userDataContext);
    useEffect(() => {
        const sliderContent = document.querySelector('#workoutSlides');

        let startX;
        let scrollLeft;

        sliderContent.addEventListener('touchstart', (e) => {
            startX = e.touches[0].pageX;
            scrollLeft = sliderContent.scrollLeft;
        });

        // Add the rest of your event listeners for mouse interactions here
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

    return (
        <div id="workoutSlides">
            <WorkoutSlide info={userData.workout.advanced.massiveUpperBody} />
            <WorkoutSlide info={userData.workout.advanced.rockHardAbs} />
            <WorkoutSlide info={userData.workout.advanced.loseWeight} />
            <WorkoutSlide info={userData.workout.advanced.strongLowerBody} />
            <WorkoutSlide info={userData.workout.advanced.fullBodyShredded} />
        </div>
    );
}
const WorkoutSlide = ({ info }) => {
    

    return (
        <div className="workoutSlide slide bottomSlider" id='weightSlide'>
            <div className='back'>
                {/* Use a background image for blending */}
                <div className="background-image" style={{ background: `url(http://localhost:3000/images/advancedWorkoutImages/${info.imageURL}) no-repeat` }}></div>
            </div>
            <div className='front'>
                <h4>{info.workDayPerWeek}: Plan</h4>

                {info.started ? (
                    <>
                        <h1>{info.title}</h1>
                        <div className='started'>
                            <h1 className="days"> DAY {info.daysDone}</h1>
                            <div className="bar">
                                <div>
                                    <div>
                                        <h3>{info.daysDone}/30 Days Finished</h3>
                                        <h3>{Math.round((info.daysDone / 30) * 100)}%</h3>
                                    </div>
                                </div>
                                <LinearProgress variant="determinate" value={(info.daysDone / 30) * 100} className="workoutProgBar" color='inherit' />
                            </div>
                            <div>
                                <button>Continue</button>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <h1 className='biggerTitle'>{info.title}</h1>
                        <div className='workoutDis'>
                            <h6> {info.description}</h6>
                            <div>
                                <button>Start</button>
                            </div>
                        </div>
                    </>
                )}

            </div>
        </div>
    );
}
const BasicWorkOut = ({ level }) => {
    const { userData, setUserData } = useContext(userDataContext);
    console.log()
    return (
        <div>
            <div className='workoutBanner'>
                <div >
                    <h4>{Object.keys(userData.workout.simple[level]).length} Workouts</h4>
                    <h3>{level}</h3>
                </div>
                <img src={`http://localhost:3000/images/advancedWorkoutImages/fatLoss.png`} />
            </div>

            <div className='workoutContainerDiv'>
                <Exercise info={userData.workout.simple[level].abs} />
                <Exercise info={userData.workout.simple[level].chest} />
                <Exercise info={userData.workout.simple[level].arm} />
                <Exercise info={userData.workout.simple[level].leg} />
                <Exercise info={userData.workout.simple[level].shoulderAndBack} />
            </div>
        </div>
    )

}
const Exercise = ({ info }) => {
    return (
        <div className='exerciseBox'>
            <div className='imageAndText'>
                <div className='exerciseImage'>
                    <img src={`http://localhost:3000/images/${info.image}`} alt="" />
                </div>
                <div className='exerciseText'>
                    <h3>{info.name}.{info.level}</h3>
                    <h4>{info.time} mins</h4>
                </div>

            </div>

        </div>
    )
}

export default Workout

