const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const testData = {
    "user": {
        "name": "Sidak",
        "age": 30,
        "weight": 75, // in kilograms
        "height": 180, // in centimeters
        "gender": "Male",
        "streak": 6,
        "longestStreak": 10,
        "workoutThisWeek": 3,
        "totalWorkout": 15
    },
    "food": {
        "recent": [
            {
                "name": "Apple",
                "nutritionalValues": {
                    "calories": 95,
                    "carbohydrates": 25,
                    "protein": 0.5,
                    "fat": 0.3,
                    "fiber": 4
                }
            },
            {
                "name": "Chicken Breast",
                "nutritionalValues": {
                    "calories": 165,
                    "carbohydrates": 0,
                    "protein": 31,
                    "fat": 3.6,
                    "fiber": 0
                }
            },
            {
                "name": "Spinach",
                "nutritionalValues": {
                    "calories": 23,
                    "carbohydrates": 3.6,
                    "protein": 2.9,
                    "fat": 0.4,
                    "fiber": 2.2
                }
            },
            {
                "name": "Salmon",
                "nutritionalValues": {
                    "calories": 206,
                    "carbohydrates": 0,
                    "protein": 22,
                    "fat": 13,
                    "fiber": 0
                }
            },
            {
                "name": "Quinoa",
                "nutritionalValues": {
                    "calories": 120,
                    "carbohydrates": 21,
                    "protein": 4,
                    "fat": 2,
                    "fiber": 2.8
                }
            },
            {
                "name": "Banana",
                "nutritionalValues": {
                    "calories": 105,
                    "carbohydrates": 27,
                    "protein": 1.3,
                    "fat": 0.3,
                    "fiber": 3.1
                }
            },
            {
                "name": "Broccoli",
                "nutritionalValues": {
                    "calories": 55,
                    "carbohydrates": 11,
                    "protein": 3.7,
                    "fat": 0.6,
                    "fiber": 5.1
                }
            },
            {
                "name": "Eggs",
                "nutritionalValues": {
                    "calories": 68,
                    "carbohydrates": 0.6,
                    "protein": 5.5,
                    "fat": 4.8,
                    "fiber": 0
                }
            },
            {
                "name": "Almonds",
                "nutritionalValues": {
                    "calories": 7,
                    "carbohydrates": 2.5,
                    "protein": 2.6,
                    "fat": 14,
                    "fiber": 1.3
                }
            },
            {
                "name": "Greek Yogurt",
                "nutritionalValues": {
                    "calories": 100,
                    "carbohydrates": 3.6,
                    "protein": 17,
                    "fat": 0.4,
                    "fiber": 0
                }
            }
        ]
    },
    "goals": {
        "caloriesGoal": 2500, // daily calorie intake goal
        "proteinGoal": 100, // daily protein intake goal (in grams)
        "carbohydrateGoal": 250, // daily carbohydrate intake goal (in grams)
        "fatGoal": 90, // daily fat intake goal (in grams)
        "sugarGoal": 50, // daily sugar intake goal (in grams)
        "ironGoal": 18, // daily iron intake goal (in milligrams)
        "sodiumGoal": 2300,
        "cholesterolGoal": 300,
        "fiberGoal": 28,
        "stepGoal": 10000,
        "weightGoal": 80,
        "pushUpGoal": 50,
        "sitUpGoal": 60,
        "squatGoal": 90
    },
    "workout": {
        "advanced": {
            "massiveUpperBody": {
                "started": true,
                "title": "Massive Upper Body",
                "workDayPerWeek": "7x4",
                "daysDone": 7,
                "description": "idk",
                "imageURL": "massiveUpperBody.png"
            },
            "rockHardAbs": {
                "started": false,
                "title": "Rock Hard ABS",
                "workDayPerWeek": "7x4",
                "daysDone": 0,
                "description": 'Killer challenge for six pack building! Get rock hard abs and rip it into a six pack by igniting every corner of your core',
                "imageURL": "rockHardAbs.png"
            },
            "loseWeight": {
                "started": false,
                "title": "Lose Weight For Men",
                "workDayPerWeek": "7x4",
                "daysDone": 0,
                "description": "Eliminate man boobs and love handles in the most efficient way with just 5-10 min a day. The best weight loss routine for men proven by millions of...",
                "imageURL": "fatLoss.png"
            },
            "strongLowerBody": {
                "started": false,
                "title": "Strong Lower Body",
                "workDayPerWeek": "7x4",
                "daysDone": 0,
                "description": "In iust 4 weeks, this plan stimulates your muscle growth, makes your legs more powerful, and enhances your overall strength and balance!",
                "imageURL": "strongLowerBody.png"
            },
            "fullBodyShredded": {
                "started": false,
                "title": "Full Body Shred",
                "workDayPerWeek": "7x4",
                "daysDone": 0,
                "description": "Embark on your body-toning journey now. You will stimulate a lot of muscles when doing these compound movements to pump up vour full bodv.",
                "imageURL": "fullBodyShredded.png"
            },
        },
        "simple": {
            "beginner": {
                "abs": {
                    "name": "Abs",
                    "time": 18,
                    "image": "simpleWorkoutImages/beginner/abs.png",
                    "level": "beginner"
                },
                "chest": {
                    "name": "Chest",
                    "time": 8,
                    "image": "simpleWorkoutImages/beginner/chest.png",
                    "level": "beginner"
                },
                "arm": {
                    "name": "Arm",
                    "time": 16,
                    "image": "simpleWorkoutImages/beginner/arm.png",
                    "level": "beginner"
                },
                "leg": {
                    "name": "Leg",
                    "time": 22,
                    "image": "simpleWorkoutImages/beginner/legs.png",
                    "level": "beginner"
                },
                "shoulderAndBack": {
                    "name": "Shoulder and Back",
                    "time": 15,
                    "image": "simpleWorkoutImages/beginner/back.png",
                    "level": "beginner"
                }
            },
            "intermediate": {
                "abs": {
                    "name": "Abs",
                    "time": 25,
                    "image": "simpleWorkoutImages/intermediate/abs.png",
                    "level": "intermediate"
                },
                "chest": {
                    "name": "Chest",
                    "time": 13,
                    "image": "simpleWorkoutImages/intermediate/chest.png",
                    "level": "intermediate"
                },
                "arm": {
                    "name": "Arm",
                    "time": 24,
                    "image": "simpleWorkoutImages/intermediate/arm.png",
                    "level": "intermediate"
                },
                "leg": {
                    "name": "Leg",
                    "time": 36,
                    "image": "simpleWorkoutImages/intermediate/legs.png",
                    "level": "intermediate"
                },
                "shoulderAndBack": {
                    "name": "Shoulder and Back",
                    "time": 17,
                    "image": "simpleWorkoutImages/intermediate/back.png",
                    "level": "intermediate"
                }
            },
            "advanced": {
                "abs": {
                    "name": "Abs",
                    "time": 30,
                    "image": "simpleWorkoutImages/advanced/abs.png",
                    "level": "advanced"
                },
                "chest": {
                    "name": "Chest",
                    "time": 16,
                    "image": "simpleWorkoutImages/advanced/chest.png",
                    "level": "advanced"
                },
                "arm": {
                    "name": "Arm",
                    "time": 29,
                    "image": "simpleWorkoutImages/advanced/arm.png",
                    "level": "advanced"
                },
                "leg": {
                    "name": "Leg",
                    "time": 47,
                    "image": "simpleWorkoutImages/advanced/legs.png",
                    "level": "advanced"
                },
                "shoulderAndBack": {
                    "name": "Shoulder and Back",
                    "time": 17,
                    "image": "simpleWorkoutImages/advanced/back.png",
                    "level": "advanced"
                }
            }
        }

    },
    "dailySummary": [
        {
            "date": "2023-09-01",
            "caloriesConsumed": 1000,
            "caloriesBurned": 400,
            "stepsTaken": 2500,
            "weight": 130,
            "exercise": [
                {
                    "name": "Running",
                    "duration": 20,
                    "caloriesBurned": 200
                },
                {
                    "name": "Cycling",
                    "duration": 20,
                    "caloriesBurned": 150
                }
            ],
            "strengthGoals": {
                "pushUp": 11,
                "sitUp": 30,
                "squat": 40
            },
            "macrosConsumed": {
                "protein": 90,
                "carbohydrate": 220,
                "fat": 10,
                "sugar": 45,
                "iron": 15,
                "sodium": 600,
                "cholesterol": 100,
                "fiber": 20
            }
        },
        {
            "date": "2023-09-02",
            "caloriesConsumed": 1800,
            "caloriesBurned": 250,
            "stepsTaken": 2000,
            "weight": 128,
            "exercise": [
                {
                    "name": "Swimming",
                    "duration": 45,
                    "caloriesBurned": 250
                }
            ],
            "strengthGoals": {
                "pushUp": 13,
                "sitUp": 29,
                "squat": 44
            },
            "macrosConsumed": {
                "protein": 110,
                "carbohydrate": 210,
                "fat": 70,
                "sugar": 40,
                "iron": 20
            }
        },
        {
            "date": "2023-09-03",
            "caloriesConsumed": 1600,
            "caloriesBurned": 300,
            "stepsTaken": 3000,
            "weight": 159,
            "exercise": [
                {
                    "name": "Yoga",
                    "duration": 30,
                    "caloriesBurned": 100
                },
                {
                    "name": "Walking",
                    "duration": 40,
                    "caloriesBurned": 150
                }
            ],
            "strengthGoals": {
                "pushUp": 18,
                "sitUp": 35,
                "squat": 50
            },
            "macrosConsumed": {
                "protein": 120,
                "carbohydrate": 200,
                "fat": 60,
                "sugar": 35,
                "iron": 18
            }
        },
        {
            "date": "2023-09-04",
            "caloriesConsumed": 1400,
            "caloriesBurned": 350,
            "stepsTaken": 2800,
            "weight": 151,
            "exercise": [
                {
                    "name": "Weightlifting",
                    "duration": 40,
                    "caloriesBurned": 300
                },
                {
                    "name": "Climbing",
                    "duration": 30,
                    "caloriesBurned": 200
                }
            ],
            "strengthGoals": {
                "pushUp": 19,
                "sitUp": 40,
                "squat": 50
            },
            "macrosConsumed": {
                "protein": 100,
                "carbohydrate": 230,
                "fat": 15,
                "sugar": 50,
                "iron": 16
            }
        },
        {
            "date": "2023-09-05",
            "caloriesConsumed": 1200,
            "caloriesBurned": 420,
            "stepsTaken": 2700,
            "weight": 152,
            "exercise": [
                {
                    "name": "Hiking",
                    "duration": 60,
                    "caloriesBurned": 400
                }
            ],
            "strengthGoals": {
                "pushUp": 22,
                "sitUp": 26,
                "squat": 52
            },
            "macrosConsumed": {
                "protein": 95,
                "carbohydrate": 240,
                "fat": 12,
                "sugar": 55,
                "iron": 14
            }
        },
        {
            "date": "2023-09-01",
            "caloriesConsumed": 1000,
            "caloriesBurned": 400,
            "stepsTaken": 2500,
            "weight": 150,
            "exercise": [
                {
                    "name": "Running",
                    "duration": 20,
                    "caloriesBurned": 200
                },
                {
                    "name": "Cycling",
                    "duration": 20,
                    "caloriesBurned": 150
                }
            ],
            "strengthGoals": {
                "pushUp": 25,
                "sitUp": 45,
                "squat": 54
            },
            "macrosConsumed": {
                "protein": 90,
                "carbohydrate": 220,
                "fat": 10,
                "sugar": 45,
                "iron": 15,
                "sodium": 600,
                "cholesterol": 100,
                "fiber": 20
            }
        },
        {
            "date": "2023-09-01",
            "caloriesConsumed": 1000,
            "caloriesBurned": 400,
            "stepsTaken": 2500,
            "weight": 150,
            "exercise": [
                {
                    "name": "Running",
                    "duration": 20,
                    "caloriesBurned": 200
                },
                {
                    "name": "Cycling",
                    "duration": 20,
                    "caloriesBurned": 150
                }
            ],
            "strengthGoals": {
                "pushUp": 28,
                "sitUp": 50,
                "squat": 49
            },
            "macrosConsumed": {
                "protein": 90,
                "carbohydrate": 220,
                "fat": 10,
                "sugar": 45,
                "iron": 15,
                "sodium": 600,
                "cholesterol": 100,
                "fiber": 20
            }
        },
    ]

}

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
}));

app.post('/home', (req, res) => {
    const requestData = req.body; // Access POST data from the request body
    console.log('Received POST data:', requestData);

    // Respond with a message
    setTimeout(() => {
        res.status(200).json(testData);
    }, 2000);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

const path = require('path');

// Serve static files from the "images" folder
app.use('/images', express.static(path.join(__dirname, 'images')));

