import * as supertest from 'supertest';
import * as express from 'express'
const app: express.Application = express();
const request: supertest.SuperTest<supertest.Test> = supertest(app);


describe('Test responses from endpoints', (): void => {
    let token:string ;
    describe('endpoint: /users', (): void => {
        beforeAll(async()=>{
            const response = await request
      .post("/users")
      .send({
        first_name: "hesham",
        last_name: "amoudi",
        password: "hesham123",
      })
      .set("Accept", "application/json");
        
      token = response.token
    })

      it('gets /', async (): Promise<void> => {
        const response: supertest.Response = await request.get('/users',token);
        expect(response.status).toBe(200);
      });
    });
});
