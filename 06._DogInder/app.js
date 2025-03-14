import express from 'express';

const app = express();

app.use(express.static("public"));

import path from 'path';


import { frontpagePage, matchesPage } from './util/pages.js';

import { getMatches } from './util/matches.js';

app.get("/", (req, res) => {
    res.send(frontpagePage);
});

app.get("/matches", (req, res) => {
    res.send(matchesPage);
});

app.get("/api/matches", async (req, res) => {
    const matches = await getMatches();
    res.send({ data: matches });
});


const PORT = Number(process.env.PORT) || 8080;
const server = app.listen(PORT, () => console.log("Server is running on port", server.address().port));
