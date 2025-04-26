-- DDL
CREATE TABLE IF NOT EXISTS runtime_environments (
	id INT AUTO_INCREMENT PRIMARY KEY,
	platform VARCHAR(255),
	version VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS games (
	id INT AUTO_INCREMENT PRIMARY KEY,
	title VARCHAR(255) NOT NULL,
	short_description VARCHAR(500),
	genre ENUM('MMO', 'RPG', 'FPS'),
	runtime_environment_id INT,
	FOREIGN KEY (runtime_environment_id) REFERENCES runtime_environments(id)
);

-- DML (seeding)
INSERT INTO runtime_environments (platform, version) VALUES ('Linux', 'Arch');

INSERT INTO games (title, runtime_environment_id) VALUES ('Tux Kart', 1);

INSERT INTO games (title) VALUES ('Hogwarts Legacy');