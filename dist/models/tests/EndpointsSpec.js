"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest = require("supertest");
const express = require("express");
const app = express();
const request = supertest(app);
describe('Test responses from endpoints', () => {
    let token;
    describe('endpoint: /users', () => {
        //     beforeAll(async()=>{
        //         const response = await request
        //   .post("/users")
        //   .send({
        //     first_name: "hesham",
        //     last_name: "amoudi",
        //     password: "hesham123",
        //   })
        //   .set("Accept", "application/json");
        //   token = response.token
        // })
        it('gets /', () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield request.get('/users', token);
            expect(response.status).toBe(200);
        }));
    });
});
