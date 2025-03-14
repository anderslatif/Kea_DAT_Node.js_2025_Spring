import { Router } from 'express';

const router = Router();

import { frontpagePage, matchesPage } from '../util/pages.js';


router.get("/", (req, res) => {
    res.send(frontpagePage);
});

router.get("/matches", (req, res) => {
    res.send(matchesPage);
});

export default router;