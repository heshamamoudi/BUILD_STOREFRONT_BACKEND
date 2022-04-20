"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
const pg_1 = require("pg");
dotenv.config();
const { POSTGRES_HOST, POSTGRES_DB, POSTGRES_USER, POSTGRES_PASSWORD, TEST_DB, ENV } = process.env;
let client;
if (ENV === 'test') {
    client = new pg_1.Pool({
        host: POSTGRES_HOST,
        database: TEST_DB,
        user: POSTGRES_USER,
        password: POSTGRES_PASSWORD
    });
}
if (ENV === 'dev') {
    client = new pg_1.Pool({
        host: POSTGRES_HOST,
        database: POSTGRES_DB,
        user: POSTGRES_USER,
        password: POSTGRES_PASSWORD
    });
}
exports.default = client;
