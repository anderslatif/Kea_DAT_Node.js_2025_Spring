import express from 'express';

const app = express();

app.use(express.static("public"));

import path from 'path';

import { getMatches } from './util/matches.js';

app.get("/", (req, res) => {
    res.sendFile(path.resolve('public/frontpage/frontpage.html'));
});

app.get("/matches", (req, res) => {
    res.sendFile(path.resolve('public/matches/matches.html'));
});

app.get("/api/matches", async (req, res) => {
    await getMatches();
    res.send({ data: [] });
});


const PORT = Number(process.env.PORT) || 8080;
const server = app.listen(PORT, () => console.log("Server is running on port", server.address().port));
