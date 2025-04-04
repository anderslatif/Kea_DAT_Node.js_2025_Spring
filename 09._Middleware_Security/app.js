import express from 'express';

const app = express();

function greetLoggedInUsers(req, res, next) {
    // let's assume that we do a DB check to see that they are logged in here
    console.log("Welcome, logged in user");
    next();
}

app.use("/auth", greetLoggedInUsers);

import middlewareRouter from "./routers/middlewareRouter.js";
app.use(middlewareRouter);

import authRouter from "./routers/authRouter.js";
app.use(authRouter);


// todo figure it out in the new syntax
// app.get("*", (req, res) => {
//     res.status(404).send("<h1>Not Found</h1>")
// });



const PORT = Number(process.env.PORT) || 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));
