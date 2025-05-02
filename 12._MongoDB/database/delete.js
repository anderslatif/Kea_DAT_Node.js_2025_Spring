import db from './connection.js';

const deletedDiscipline = await db.disciplines.deleteOne({ name: "Akido", location: "Kampsportens Hus" });

console.log(deletedDiscipline);
