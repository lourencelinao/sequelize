CREATE DATABASE SEQUELIZE;

USE SEQUELIZE;

CREATE TABLE users(
    id int auto_increment,
    firstname varchar(32) not null,
    lastname varchar(32) not null,
    createdAt DATETIME DEFAULT now(),
    updatedAt DATETIME,

    CONSTRAINT PK_user PRIMARY KEY(id)
);