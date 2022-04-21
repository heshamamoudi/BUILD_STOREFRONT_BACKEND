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
    it('GET all users', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield request.get('/users');
            console.log(response.body);
            expect(response.status).toBe(200);
        });
    });
    it('Create user', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield request.post('/signup').send({
                firstname: 'raman',
                lastname: 'raghav',
                username: "heshamamoudi",
                password: 'helloworld123',
            });
            console.log(response.body);
            expect(response.status).toBe(200);
        });
    });
});
