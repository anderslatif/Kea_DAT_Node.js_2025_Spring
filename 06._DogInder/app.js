import express from 'express';

const app = express();

app.use(express.static("public"));

import path from 'path';
import fs from 'fs';

import { getMatches } from './util/matches.js';

const frontpage = fs.readFileSync('./public/frontpage/frontpage.html').toString();
const matches = fs.readFileSync('./public/matches/matches.html').toString();


app.get("/", (req, res) => {
    res.send(frontpage);
});

app.get("/matches", (req, res) => {
    res.sendFile(path.resolve('public/matches/matches.html'));
});

app.get("/api/matches", async (req, res) => {
    const matches = await getMatches();
    res.send({ data: matches });
});


const PORT = Number(process.env.PORT) || 8080;
const server = app.listen(PORT, () => console.log("Server is running on port", server.address().port));
