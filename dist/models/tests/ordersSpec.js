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
const orders_1 = require("../orders");
const store = new orders_1.orderStore();
describe('Test responses from order model', () => {
    let order;
    beforeAll(function () {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield store.create({
                status: "active",
                user_id: '1',
            });
            order = response;
        });
    });
    it('GET all orders', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield store.index();
            expect(response).toBeTruthy();
        });
    });
    it('add to order', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const quants = 22;
            const orderId = order.id + "";
            const productId = '1';
            const response = yield store.addProduct(quants, orderId, productId);
            expect(response).toBeTruthy();
        });
    });
    it('update order', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield store.update("closed", order.id + "");
            expect(response).toEqual({
                id: order.id,
                status: "closed",
                user_id: order.user_id,
                product_id: null
            });
        });
    });
    // it('Delete to order', async function ():Promise<void> {
    //     const response = await store.delete("1");
    //     expect(response).toBeTruthy();
    //   });
});
