"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authToken = void 0;
const jwt = require("jsonwebtoken");
const authToken = (req, res, next) => {
    try {
        const authorizationHeader = req.headers['authorization'];
        const token = authorizationHeader.split(' ')[1];
        jwt.verify(token, process.env.TOKEN_SECRET);
        next();
    }
    catch (error) {
        res.status(401).send("access denied!");
    }
};
exports.authToken = authToken;
