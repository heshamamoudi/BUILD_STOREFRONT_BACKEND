"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
const express = require("express");
const bodyParser = require("body-parser");
const users_1 = require("./handlers/users");
const orders_1 = require("./handlers/orders");
const products_1 = require("./handlers/products");
const app = express();
const address = 'localhost:5000';
app.use(bodyParser.json());
(0, users_1.default)(app);
(0, products_1.default)(app);
(0, orders_1.default)(app);
app.listen(5000, function () {
    console.log(`starting app on: ${address}`);
});
exports.default = app;
