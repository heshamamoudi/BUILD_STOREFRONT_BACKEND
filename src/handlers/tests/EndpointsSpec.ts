import * as supertest from 'supertest';
import * as express from 'express'


const app: express.Application = express();
const request = supertest(app);



describe('Test responses from endpoints', (): void => {
    let token:string ;
    
    it('GET all users', async function ():Promise<void> {
        const response: supertest.Response = await request.get('/users');
        console.log(response.body)
        expect(response.status).toBe(200);
      });

      it('Create user', async function ():Promise<void> {
        const response = await request.post('/signup').send({
          firstname: 'raman',
          lastname: 'raghav',
          username:"heshamamoudi",
          password: 'helloworld123',
        });
        
        console.log(response.body)
        expect(response.status).toBe(200);
        
      });
      
    });

      


