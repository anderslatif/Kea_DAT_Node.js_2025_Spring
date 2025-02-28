const express = require('express');

const { parties } = require('./util/partiesLibrary.js');
// console.log(parties);

const app = express();

app.use(express.static('public'));

let visitorsCount = 123440;

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/frontpage/frontpage.html");
});

app.get("/partypage", (req, res) => {
    res.sendFile(__dirname + "/public/partypage/partyPage.html");
});

app.get("/visitorscounts", (req, res) => {
    res.send({ data: ++visitorsCount });
});

const PORT = 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));
