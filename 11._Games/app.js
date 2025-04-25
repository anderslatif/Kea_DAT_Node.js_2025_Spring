import express from 'express';

const app = express();

app.use(express.json());

import gamesRouter from './routers/gamesRouter.js';
app.use(gamesRouter);


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));