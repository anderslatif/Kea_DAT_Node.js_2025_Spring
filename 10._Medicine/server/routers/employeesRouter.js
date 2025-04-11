import { Router } from 'express';

const router = Router();

const employees = ["Ilmer", "Homer"];

router.get("/employees", (req, res) => {
    res.send({ data: employees });
});


export default router;