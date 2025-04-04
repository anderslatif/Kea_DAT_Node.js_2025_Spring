import {Router} from 'express';

const router = Router();

// function greetLoggedInUsers(req, res, next) {
//     // let's assume that we do a DB check to see that they are logged in here
//     console.log("Welcome, logged in user");
//     next();
// }

// router.use("/auth", greetLoggedInUsers);

function isAdmin(req, res, next) {
    // this simulates requesting a database if the user is admin
    // the variable below would then set accordingly
    const userIsAdmin = true;
    if (userIsAdmin) {
        req.isAdmin = userIsAdmin;
        // again, this simulates getting it from the database
        req.username = "Johnnie";
        return next();
    }
    res.status(403).send({ message: "Sorry. You do not have permission." });
}

router.get("/auth/admin", isAdmin, (req, res) => {
    console.log(req.isAdmin, req.username);
    res.send({ message: "You are an admin!" });
});

router.get("/auth/user", (req, res) => {
    res.send({ message: "You are just a user." });
});

export default router;