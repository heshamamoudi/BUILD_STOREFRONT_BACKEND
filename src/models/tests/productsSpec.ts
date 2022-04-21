import { product,productStore } from "../products";
const store = new productStore();

describe('Test responses from endpoints', (): void => {
    let p:product = {
        name: "horizon",
        price: '4',
      }

    it('GET all products', async function ():Promise<void> {
        const response =await store.index()

        expect(response).toBeTruthy();
      });

      it('Create product', async function ():Promise<void> {
          
        const response = await store.create(p);

        expect(response).toBeTruthy();
        
      });


      it('update product', async function ():Promise<void> {
      const response = await store.update(p.name,222,p.id);
      expect(response).toBeTruthy();
      
    });
    it('Delete product', async function ():Promise<void> {
        const response = await store.delete(p.id);
        expect(response).toBeTruthy();
        
      });
      
      
    });