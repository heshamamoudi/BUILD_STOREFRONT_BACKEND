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
const server_1 = require("../../server");
const request = supertest(server_1.default);
const dotenv = require("dotenv");
dotenv.config();
const { TEST_TOKEN } = process.env;
describe('Test responses from endpoints', () => {
    it('Create user', function () {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield request.post('/signup').send({
                    firstname: 'raman',
                    lastname: 'raghav',
                    username: "heshamamoudi",
                    password: 'helloworld123',
                });
                expect(response.status).toBe(200);
            }
            catch (error) {
                Promise.reject("Error accured");
            }
        });
    });
    it('GET all users', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield request.get('/users').set('Authorization', 'Bearer ' + TEST_TOKEN);
            expect(response.status).toBe(200);
        });
    });
    it('GET 1 user', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield request.get('/users/1').set('Authorization', 'Bearer ' + TEST_TOKEN);
            expect(response.status).toBe(200);
        });
    });
    it('GET all users', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield request.get('/users').set('Authorization', 'Bearer ' + TEST_TOKEN);
            expect(response.status).toBe(200);
        });
    });
});
