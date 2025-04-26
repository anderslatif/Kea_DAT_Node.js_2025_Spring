import db from "./connection.js";

const [rows, fields] = await db.query(`SELECT * FROM games LIMIT 5;`);

console.log(rows);
