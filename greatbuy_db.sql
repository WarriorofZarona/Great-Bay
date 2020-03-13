DROP DATABASE IF EXISTS greatbuy_DB;

CREATE DATABASE greatbuy_DB;

USE greatbuy_DB;

CREATE TABLE products
(
  id INT NOT NULL
  AUTO_INCREMENT,
  name VARCHAR
  (50) NULL,
  bid VARCHAR
  (50) NULL,
  PRIMARY KEY
  (id)
)