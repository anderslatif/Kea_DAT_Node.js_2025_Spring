// const express = require('express');
import express from 'express';

import path from 'path';

// const { parties } = require('./util/partiesLibrary.js');
// console.log(parties);

// import partiesLibraryESModules from './util/partiesLibraryES.js';

const app = express();

app.use(express.static('public'));

let visitorsCount = 123440;

app.get("/", (req, res) => {
    res.sendFile(path.resolve("public/frontpage/frontpage.html"));
});

app.get("/partypage", (req, res) => {
    res.sendFile(path.resolve("public/partypage/partyPage.html"));
});

app.get("/visitorscounts", (req, res) => {
    res.send({ data: ++visitorsCount });
});

const PORT = 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));
