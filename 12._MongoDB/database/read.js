import db from './connection.js';

const data = await db.disciplines.find().toArray();

console.log(data);