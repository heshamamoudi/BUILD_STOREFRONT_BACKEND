import { product,productStore } from "../products";
const store = new productStore();

describe('Test responses from product model', (): void => {
  let product:product;
  beforeAll(async function():Promise<void>{
    try{
    const response = await store.create({
      name: "horizon",
      price: 4,
    });
    product=response;
    
  } catch (error) {
    throw new Error("failed to create product")
  }
  })


    it('GET all products', async function ():Promise<void> {
        const response =await store.index()

        expect(response).toBeTruthy();
      });

    


      it('update product', async function ():Promise<void> {
      const response = await store.update(product.name,222,product.id);
      expect(response).toEqual({
        id:product.id,
        name: "horizon",
        price: 222,
        category: null
      });
      
    });

    // it('Delete product', async function ():Promise<void> {
    //     const response = await store.delete(1);
    //     expect(response).toBeTruthy();
        
    //   });
      
      
    });