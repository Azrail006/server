-- Active: 1683277828646@@127.0.0.1@5432@postgres
CREATE TABLE products(
    id SERIAL PRIMARY KEY,
    name VARCHAR(225),
    price TEXT,
    stock VARCHAR(225)
);

