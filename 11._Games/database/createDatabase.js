import db from './connection.js';

// db.all for SELECT statements, we want to get something back
// db.run for INSERT, UPDATE, DELETE, doesn't return data
// db.exec for schematics without parameters, can contain multiple commands

const deleteMode = process.argv.includes("--delete");

if (deleteMode) {
    await db.run(`DROP TABLE IF EXISTS games;`);
    await db.run(`DROP TABLE IF EXISTS runtime_environments;`);
}


// DDL
await db.exec(`
    CREATE TABLE IF NOT EXISTS runtime_environments (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        platform TEXT,
        version TEXT
    );

    CREATE TABLE IF NOT EXISTS games (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        short_description VARCHAR(500),
        genre TEXT CHECK( genre IN ("MMO", "RPG", "FPS") ),
        runtime_environment_id INTEGER,
        FOREIGN KEY (runtime_environment_id) REFERENCES runtime_environments (id)
    );
`);

// DML
// seeding
if (deleteMode) {
    await db.run('INSERT INTO runtime_environments (platform, version) VALUES ("Linux", "Arch");');
    await db.run('INSERT INTO games (title, runtime_environment_id) VALUES ("Tux Kart", 1);')
    await db.run('INSERT INTO games (title) VALUES ("Hogwarts Legacy");')    
}


