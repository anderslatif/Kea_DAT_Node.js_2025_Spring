const express = require('express');

const app = express();

// console.log(new Date()); // UTC 

// console.log(Date()); // Local date time (CEST for us)

// console.log(Date.now()); // Unix time / Epoch (Seconds since 1970 Jan. 1st)


const months = ["January", "February", "March", "April", "May", "June", "July", 
    "August", "September", "October", "November", "December"];


app.get("/months/v1", (req, res) => {
    const currentMonth = months[new Date().getMonth()];

    res.send({ data: currentMonth });
});

app.get("/months/v2", (req, res) => {
    const currentMonth = new Date().toLocaleDateString( "en-uk", { month: "long" });

    res.send({ data: currentMonth });
});


app.get("/months/v3", (req, res) => {

    const currentMonth = Date().split(" ")[1];

    res.send({ data: currentMonth });
});

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

app.get("/days/v1", (req, res) => {
    const currentDay = days[new Date().getDay()];

    res.send({ data: currentDay });
});

const PORT = 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));