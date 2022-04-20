CREATE TABLE orders (id SERIAL PRIMARY KEY,
    product_id bigint REFERENCES products(id), 
    status VARCHAR(64),
     user_id bigint REFERENCES users(id));