import db from './connection.js';

const updateDiscipline = await db.disciplines.updateOne({ name: "Boxing" }, { $set: { name: "Thai Boxing" } });

console.log(updateDiscipline);