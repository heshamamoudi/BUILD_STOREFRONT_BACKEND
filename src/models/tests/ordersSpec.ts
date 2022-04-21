import { order,orderStore } from "../orders";
const store = new orderStore();

describe('Test responses from endpoints', (): void => {
  

    it('GET all orders', async function ():Promise<void> {
        const response =await store.index()

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
      
    //   it('Create user', async function ():Promise<void> {
    //     const response = await request.post('/signup').send({
    //       firstname: 'raman',
    //       lastname: 'raghav',
    //       username:"heshamamoudi",
    //       password: 'helloworld123',
    //     });
    //     token=response.body.token;
    //     expect(response.status).toBe(200);
        
    //   });


      
    });