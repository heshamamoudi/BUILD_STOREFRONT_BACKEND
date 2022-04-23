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
const products_1 = require("../products");
const store = new products_1.productStore();
describe('Test responses from product model', () => {
    let product;
    it("create product", function () {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield store.create({
                    name: "horizon",
                    price: 4,
                });
                product = response;
            }
            catch (error) {
                throw new Error("failed to create product");
            }
        });
    });
    it('GET all products', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield store.index();
            expect(response).toBeTruthy();
        });
    });
    it('update product', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield store.update(product.name, 222, product.id);
            expect(response).toEqual({
                id: product.id,
                name: "horizon",
                price: 222,
                category: null
            });
        });
    });
    // it('Delete product', async function ():Promise<void> {
    //     const response = await store.delete(1);
    //     expect(response).toBeTruthy();
    //   });
});
