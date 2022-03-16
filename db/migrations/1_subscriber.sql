DROP TABLE IF EXISTS Subscribers; 

CREATE TABLE Subscribers(
    id serial PRIMARY KEY,
    name VARCHAR(30),
    email VARCHAR(200) NOT NULL UNIQUE,
    is_tester BIT,
    joined TIMESTAMP
); 
SET timezone = 'Europe/London';