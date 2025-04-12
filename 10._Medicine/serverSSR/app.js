import 'dotenv/config';
import express from 'express';

const app = express();

app.use(express.json());

app.use(express.static(path.resolve('../client/dist/')));

import session from 'express-session';

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  }));


import employeesRouter from './routers/employeesRouter.js';
app.use(employeesRouter);
import pillsRouter from './routers/pillsRouter.js';
app.use(pillsRouter);

import path from 'path';

app.get("/{*splat}", (req, res) => {
  res.sendFile(path.resolve('../client/dist/index.html'));
});

const PORT = Number(process.env.PORT) || 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));
