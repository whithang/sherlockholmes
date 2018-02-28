DROP DATABASE IF EXISTS sh_database;

CREATE DATABASE sh_database;

USE sh_database;

CREATE TABLE chapter (
  id int PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50)
);

INSERT INTO chapter (id, name) values (1, 'chapter 1');
INSERT INTO chapter (id, name) values (2, 'chapter 2');
