import { Router } from "express";

const router = Router();

import { getMatches } from '../util/matches.js';

router.get("/api/matches", async (req, res) => {
    const matches = await getMatches();
    res.send({ data: matches });
});


export default router;