import db from './connection.js';

const newDiscipline = await db.disciplines.insertOne({ name: "Boxing" });

console.log(newDiscipline);