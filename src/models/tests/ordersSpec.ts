import { order,orderStore } from "../orders";
const store = new orderStore();

describe('Test responses from order model', (): void => {
  

    it('GET all orders', async function ():Promise<void> {
        const response =await store.index()

        expect(response).toBeTruthy();
      });

      it('Delete order', async function ():Promise<void> {
        const quants: number=222
        const orderId: string='2'
        const productId: string='2'
        const response = await store.addProduct(quants,orderId,productId);
        expect(response).toBeTruthy();
        
      });

      it('Create order', async function ():Promise<void> {
          const o:order = {
            status: "active",
            user_id: '4',
          }
        const response = await store.create(o);

        expect(response).toBeTruthy();
        
      });


      it('update order', async function ():Promise<void> {
      const response = await store.update("closed","1");
      expect(response).toBeTruthy();
      
    });
    it('add product to order', async function ():Promise<void> {
        const response = await store.delete("1");
        expect(response).toBeTruthy();
        
      });
      
      
    });