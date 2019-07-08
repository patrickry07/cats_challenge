-- DROP DATABASE IF EXISTS levelset;

-- CREATE DATABASE levelset;

USE cats;

-- CREATE TABLE Cats (
--   id int NOT NULL AUTO_INCREMENT,
--   thumbnail varchar(250) NOT NULL,
--   name varchar(250) NOT NULL,
--   birthdate varchar(250) NOT NULL,
--   owner_name varchar(250) NOT NULL,
--   views int NOT NULL,
--   PRIMARY KEY (ID)
-- );  

INSERT into cats
  (thumbnail, name, birthdate, owner_name, views )
VALUES
  ('https://res.cloudinary.com/dlqxzhifw/image/upload/v1560197249/nvwnqarwjpd4xwqg0m8p.jpg', 'JoJo', '2016-01-01', "Alex Crowley", 0);

INSERT into cats
  (thumbnail, name, birthdate, owner_name, views )
VALUES
  ('https://res.cloudinary.com/dlqxzhifw/image/upload/v1560197376/ca1wpzeqjkrtoges6idi.webp', 'TigerLilly', '2012-02-02', 'Joseph Ryan', 0);

  INSERT into cats
  (thumbnail, name, birthdate, owner_name, views )
VALUES
  ('https://res.cloudinary.com/dlqxzhifw/image/upload/v1560197442/esrkern6sjhwrpq2yj3r.webp', 'Eunice', '2004-03-03', 'Patrick Coogan', 0);

  INSERT into cats
  (thumbnail, name, birthdate, owner_name, views )
VALUES
  ('https://res.cloudinary.com/dlqxzhifw/image/upload/v1560197756/evnp8aryrkuln31amiha.jpg', 'Delphine', '2018-04-04', 'Emily Eisenhauer', 0);

  INSERT into cats
  (thumbnail, name, birthdate, owner_name, views )
VALUES
  ('https://res.cloudinary.com/dlqxzhifw/image/upload/v1560197775/di8y3ir81bip1o5dpeia.jpg', 'Dodger', '2001-05-05', 'Thomas Baldwin', 0);

