import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import Login from './files/Login'
import HomePage from "./files/homepage"
import Workout from "./files/workout"
import { FoodSvg, HomeSvg } from "./files/Svg"
import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import Food from './files/food';

export const userDataContext = createContext()

export function UserDataProvider({ children }) {
    const blankUserData = {
        "user": {
            "name": "blankData",
            "age": 0,
            "weight": 0, // in kilograms
            "height": 0, // in centimeters
            "gender": "",
            "streak": 0,
            "longestStreak": 0,
            "workoutThisWeek": 0,
            "totalWorkout": 0
        },
        "food": {
            "recent": [
                {
                    "name": "Loading",
                    "nutritionalValues": {
                        "calories": 0,
                        "carbohydrates": 0,
                        "protein": 0,
                        "fat": 0,
                        "fiber": 0
                    }
                },
                {
                    "name": "Loading",
                    "nutritionalValues": {
                        "calories": 0,
                        "carbohydrates": 0,
                        "protein": 0,
                        "fat": 0,
                        "fiber": 0
                    }
                },
                {
                    "name": "Loading",
                    "nutritionalValues": {
                        "calories": 0,
                        "carbohydrates": 0,
                        "protein": 0,
                        "fat": 0,
                        "fiber": 0
                    }
                },
                {
                    "name": "Loading",
                    "nutritionalValues": {
                        "calories": 0,
                        "carbohydrates": 0,
                        "protein": 0,
                        "fat": 0,
                        "fiber": 0
                    }
                },
                {
                    "name": "Loading",
                    "nutritionalValues": {
                        "calories": 0,
                        "carbohydrates": 0,
                        "protein": 0,
                        "fat": 0,
                        "fiber": 0
                    }
                },
                {
                    "name": "Loading",
                    "nutritionalValues": {
                        "calories": 0,
                        "carbohydrates": 0,
                        "protein": 0,
                        "fat": 0,
                        "fiber": 0
                    }
                },
                {
                    "name": "Loading",
                    "nutritionalValues": {
                        "calories": 0,
                        "carbohydrates": 0,
                        "protein": 0,
                        "fat": 0,
                        "fiber": 0
                    }
                },
                {
                    "name": "Loading",
                    "nutritionalValues": {
                        "calories": 0,
                        "carbohydrates": 0,
                        "protein": 0,
                        "fat": 0,
                        "fiber": 0
                    }
                },
                {
                    "name": "Loading",
                    "nutritionalValues": {
                        "calories": 0,
                        "carbohydrates": 0,
                        "protein": 0,
                        "fat": 0,
                        "fiber": 0
                    }
                },
                {
                    "name": "Loading",
                    "nutritionalValues": {
                        "calories": 0,
                        "carbohydrates": 0,
                        "protein": 0,
                        "fat": 0,
                        "fiber": 0
                    }
                },
                {
                    "name": "Loading",
                    "nutritionalValues": {
                        "calories": 0,
                        "carbohydrates": 0,
                        "protein": 0,
                        "fat": 0,
                        "fiber": 0
                    }
                },
            ]

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
            "weightGoal": 0,
            "pushUpGoal": 0,
            "sitUpGoal": 0,
            "squatGoal": 0
        },
        workout: {
            "advanced": {
                "massiveUpperBody": {
                    "started": "",
                    "title": "",
                    "workDayPerWeek": "",
                    "daysDone": "",
                    "description": "",
                    "imageURL": ""
                },
                "rockHardAbs": {
                    "started": "",
                    "title": "",
                    "workDayPerWeek": "",
                    "daysDone": "",
                    "description": "",
                    "imageURL": ""
                },
                "loseWeight": {
                    "started": "",
                    "title": "",
                    "workDayPerWeek": "",
                    "daysDone": "",
                    "description": "",
                    "imageURL": ""
                },
                "strongLowerBody": {
                    "started": "",
                    "title": "",
                    "workDayPerWeek": "",
                    "daysDone": "",
                    "description": "",
                    "imageURL": ""
                },
                "fullBodyShredded": {
                    "started": "",
                    "title": "",
                    "workDayPerWeek": "",
                    "daysDone": "",
                    "description": "",
                    "imageURL": ""
                }
            },

            "simple": {
                "beginner": {
                    "abs": {
                        "time": 0,
                        "image": "",
                        "level": "",
                        "name": ""
                    },
                    "chest": {
                        "time": 0,
                        "image": "",
                        "level": "",
                        "name": ""
                    },
                    "arm": {
                        "time": 0,
                        "image": "",
                        "level": "",
                        "name": ""
                    },
                    "leg": {
                        "time": 0,
                        "image": "",
                        "level": "",
                        "name": ""
                    },
                    "shoulderAndBack": {
                        "time": 0,
                        "image": "",
                        "level": "",
                        "name": ""
                    }
                },
                "intermediate": {
                    "abs": {
                        "time": 0,
                        "image": "",
                        "level": "",
                        "name": ""
                    },
                    "chest": {
                        "time": 0,
                        "image": "",
                        "level": "",
                        "name": ""
                    },
                    "arm": {
                        "time": 0,
                        "image": "",
                        "level": "",
                        "name": ""
                    },
                    "leg": {
                        "time": 0,
                        "image": "",
                        "level": "",
                        "name": ""
                    },
                    "shoulderAndBack": {
                        "time": 0,
                        "image": "",
                        "level": "",
                        "name": ""
                    }
                },
                "advanced": {
                    "abs": {
                        "time": 0,
                        "image": "",
                        "level": "",
                        "name": ""
                    },
                    "chest": {
                        "time": 0,
                        "image": "",
                        "level": "",
                        "name": ""
                    },
                    "arm": {
                        "time": 0,
                        "image": "",
                        "level": "",
                        "name": ""
                    },
                    "leg": {
                        "time": 0,
                        "image": "",
                        "level": "",
                        "name": ""
                    },
                    "shoulderAndBack": {
                        "time": 0,
                        "image": "",
                        "level": "",
                        "name": ""
                    }
                }
            }


        },
        "dailySummary": [
            {
                "date": "",
                "caloriesConsumed": 0,
                "caloriesBurned": 0,
                "stepsTaken": 0,
                "weight": 0,
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
                "strengthGoals": {
                    "pushUp": 0,
                    "sitUp": 0,
                    "squat": 0
                }
                ,
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
                "weight": 0,
                "exercise": [
                    {
                        "name": "",
                        "duration": "",
                        "caloriesBurned": ""
                    }
                ], "strengthGoals": {
                    "pushUp": 0,
                    "sitUp": 0,
                    "squat": 0
                },
                "macrosConsumed": {
                    "protein": "",
                    "carbohydrate": "",
                    "fat": "",
                    "sugar": "", // grams
                    "iron": "" // milligrams
                }
            }, {
                "date": "",
                "caloriesConsumed": 0,
                "caloriesBurned": 0,
                "stepsTaken": 0,
                "weight": 0,
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
                "strengthGoals": {
                    "pushUp": 0,
                    "sitUp": 0,
                    "squat": 0
                }
                ,
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
                "weight": 0,
                "exercise": [
                    {
                        "name": "",
                        "duration": "",
                        "caloriesBurned": ""
                    }
                ], "strengthGoals": {
                    "pushUp": 0,
                    "sitUp": 0,
                    "squat": 0
                },
                "macrosConsumed": {
                    "protein": "",
                    "carbohydrate": "",
                    "fat": "",
                    "sugar": "", // grams
                    "iron": "" // milligrams
                }
            }, {
                "date": "",
                "caloriesConsumed": 0,
                "caloriesBurned": 0,
                "stepsTaken": 0,
                "weight": 0,
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
                "strengthGoals": {
                    "pushUp": 0,
                    "sitUp": 0,
                    "squat": 0
                }
                ,
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
                "weight": 0,
                "exercise": [
                    {
                        "name": "",
                        "duration": "",
                        "caloriesBurned": ""
                    }
                ], "strengthGoals": {
                    "pushUp": 0,
                    "sitUp": 0,
                    "squat": 0
                },
                "macrosConsumed": {
                    "protein": "",
                    "carbohydrate": "",
                    "fat": "",
                    "sugar": "", // grams
                    "iron": "" // milligrams
                }
            }, {
                "date": "",
                "caloriesConsumed": 0,
                "caloriesBurned": 0,
                "stepsTaken": 0,
                "weight": 0,
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
                "strengthGoals": {
                    "pushUp": 0,
                    "sitUp": 0,
                    "squat": 0
                }
                ,
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
                "weight": 0,
                "exercise": [
                    {
                        "name": "",
                        "duration": "",
                        "caloriesBurned": ""
                    }
                ], "strengthGoals": {
                    "pushUp": 0,
                    "sitUp": 0,
                    "squat": 0
                },
                "macrosConsumed": {
                    "protein": "",
                    "carbohydrate": "",
                    "fat": "",
                    "sugar": "", // grams
                    "iron": "" // milligrams
                }
            }, {
                "date": "",
                "caloriesConsumed": 0,
                "caloriesBurned": 0,
                "stepsTaken": 0,
                "weight": 0,
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
                "strengthGoals": {
                    "pushUp": 0,
                    "sitUp": 0,
                    "squat": 0
                }
                ,
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
                "weight": 0,
                "exercise": [
                    {
                        "name": "",
                        "duration": "",
                        "caloriesBurned": ""
                    }
                ], "strengthGoals": {
                    "pushUp": 0,
                    "sitUp": 0,
                    "squat": 0
                },
                "macrosConsumed": {
                    "protein": "",
                    "carbohydrate": "",
                    "fat": "",
                    "sugar": "", // grams
                    "iron": "" // milligrams
                }
            }

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
                    <Route path="/workout" element={<Workout />} />
                    <Route path="/" element={<HomePage />} />
                    <Route path='/food' element={<Food />} />
                    <Route path='/test' element={<HomeSvg />} />
                </Routes>
            </BrowserRouter>
        </UserDataProvider>
    )

}

export default App
