import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import Login from './files/Login'
import HomePage from "./files/homepage"
import { FoodSvg, HomeSvg } from "./files/Svg"
import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

export const userDataContext = createContext()

export function UserDataProvider({ children }) {
    const blankUserData = {
        "user": {
            "name": "blankData",
            "age": 0,
            "weight": 0, // in kilograms
            "height": 0, // in centimeters
            "gender": ""
        },
        "goals": {
            "caloriesGoal": 0, // daily calorie intake goal
            "proteinGoal": 5, // daily protein intake goal (in grams)
            "carbohydrateGoal": 0, // daily carbohydrate intake goal (in grams)
            "fatGoal": 0, // daily fat intake goal (in grams)
            "sugarGoal": 0, // daily sugar intake goal (in grams)
            "ironGoal": 0, // daily iron intake goal (in milligrams)
            "sodiumGoal": 0,
            "cholesterolGoal": 0,
            "fiberGoal": 0,
            "stepsGoal": 0,
        },
        "dailySummary": [
            {
                "date": "",
                "caloriesConsumed": 0,
                "caloriesBurned": 0,
                "stepsTaken": 0,
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
                    "iron": 0, // milligrams
                    "sodium": 0,
                    "cholesterol": 0,
                    "fiber": 0
                }
            },
            {
                "date": "",
                "caloriesConsumed": "",
                "caloriesBurned": "",
                "stepsTaken": 0,
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

    const [userData, setUserData] = useState(blankUserData);

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

    return (
        <userDataContext.Provider value={{ userData, setUserData }}>
            {children}
        </userDataContext.Provider>
    );

}

function App() {
    return (
        <UserDataProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<HomePage />} />
                    <Route path='/test' element={<HomeSvg />} />
                </Routes>
            </BrowserRouter>
        </UserDataProvider>
    )

}

export default App
