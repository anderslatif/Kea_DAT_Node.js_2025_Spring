const express = require('express');

const app = express();

let visitorsCount = 123440;

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/frontpage.html");
});

app.get("/visitorscounts", (req, res) => {
    res.send({ data: ++visitorsCount });
});

const PORT = 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));
