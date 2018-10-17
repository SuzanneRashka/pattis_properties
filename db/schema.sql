
DROP DATABASE IF EXISTS pattisprops;
CREATE DATABASE pattisprops;

USE pattisprops;

CREATE TABLE clients (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL
);