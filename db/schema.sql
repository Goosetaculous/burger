DROP DATABASE IF EXISTS burgers_db;
CREATE database burgers_db;

USE burgers_db;


CREATE TABLE burgers(
  id INT NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(45) NULL,
  devoured BOOLEAN NOT NULL DEFAULT 0,
  date TIMESTAMP NOT NULL,
  PRIMARY KEY (id)
);



