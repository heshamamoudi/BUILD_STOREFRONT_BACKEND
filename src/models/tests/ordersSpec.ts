import { order, orderStore } from "../orders";
const store = new orderStore();

describe('Test responses from order model', (): void => {
  // before failing making everything fail with it
  let order:order;
  beforeAll(async function():Promise<void>{
    const response = await store.create({
      status: "active",
      user_id: '1',
    });
    order=response;
  })
  
    it('GET all orders', async function ():Promise<void> {
        const response =await store.index()

        expect(response).toBeTruthy();
      });

      it('add to order', async function ():Promise<void> {
        const quants: number=22
        const orderId: string=order.id+""
        const productId: string='1'
        const response = await store.addProduct(quants,orderId,productId);
        expect(response).toBeTruthy();
        
      });

     


      it('update order', async function ():Promise<void> {
      const response = await store.update("closed",order.id+"");
      expect(response).toEqual({
        id:order.id,
        status: "closed",
        user_id: order.user_id,
        product_id:null
      });
      
    });
    // it('Delete to order', async function ():Promise<void> {
    //     const response = await store.delete("1");
    //     expect(response).toBeTruthy();
        
    //   });
      
      
    });