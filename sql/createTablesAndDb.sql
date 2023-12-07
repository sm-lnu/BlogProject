CREATE DATABASE BlogDB;

create Table post(
    id SERIAL PRIMARY KEY,
    title VARCHAR(50),
    description VARCHAR(300),
    user_id INTEGER
);