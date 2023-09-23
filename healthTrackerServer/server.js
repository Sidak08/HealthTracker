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
        "gender": "Male"
    },
    "goals": {
        "caloriesGoal": 2500, // daily calorie intake goal
        "proteinGoal": 100, // daily protein intake goal (in grams)
        "carbohydrateGoal": 250, // daily carbohydrate intake goal (in grams)
        "fatGoal": 90, // daily fat intake goal (in grams)
        "sugarGoal": 50, // daily sugar intake goal (in grams)
        "ironGoal": 18 // daily iron intake goal (in milligrams)
    },
    "dailySummary": [
        {
            "date": "2023-09-01",
            "caloriesConsumed": 1000,
            "caloriesBurned": 300,
            "exercise": [
                {
                    "name": "Running",
                    "duration": "30 minutes",
                    "caloriesBurned": 200
                },
                {
                    "name": "Cycling",
                    "duration": "20 minutes",
                    "caloriesBurned": 100
                }
            ],
            "macrosConsumed": {
                "protein": 90,
                "carbohydrate": 220,
                "fat": 10,
                "sugar": 45, // grams
                "iron": 15 // milligrams
            }
        },
        {
            "date": "2023-09-02",
            "caloriesConsumed": 1800,
            "caloriesBurned": 250,
            "exercise": [
                {
                    "name": "Swimming",
                    "duration": "45 minutes",
                    "caloriesBurned": 250
                }
            ],
            "macrosConsumed": {
                "protein": 110,
                "carbohydrate": 210,
                "fat": 70,
                "sugar": 40, // grams
                "iron": 20 // milligrams
            }
        }
        // ... add more daily summaries for different dates
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
