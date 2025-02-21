const express = require('express');

const app = express();

let visitorCount = 0;

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/frontpage.html");
});

app.get("/visitorcounts", (req, res) => {
    res.send({ data: ++visitorCount });
});

const PORT = 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));
