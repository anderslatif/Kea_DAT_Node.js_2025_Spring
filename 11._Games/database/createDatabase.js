import db from './connection.js';

const deleteMode = process.argv.includes("--delete");

if (deleteMode) {
    db.run(`DROP TABLE IF EXISTS games;`);
    db.run(`DROP TABLE IF EXISTS runtime_environments;`);
}


// DDL
db.exec(`CREATE TABLE IF NOT EXISTS runtime_environments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    platform TEXT,
    version TEXT
);
`);

db.exec(
    `CREATE TABLE IF NOT EXISTS games (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    short_description VARCHAR(500),
    genre TEXT CHECK( genre IN ('MMO', 'RPG', 'FPS') ),
    runtime_environment_id INTEGER,
    FOREIGN KEY (runtime_environment_id) REFERENCES runtime_environments (id)
);
`);

// DML
