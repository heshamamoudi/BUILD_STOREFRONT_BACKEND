import * as supertest from 'supertest';
import app from '../../server'

const request = supertest(app);

import * as dotenv from 'dotenv';
dotenv.config();
const {
    TEST_TOKEN
} = process.env;


describe('Test responses from User endpoints', (): void => {
  
    it('Create user', async function ():Promise<void> {
        try {
          const response: supertest.Response = await request.post('/signup').send({
              firstname: 'raman',
              lastname: 'raghav',
              username:"heshamamoudi",
              password: 'helloworld123',
            });
            
          expect(response.status).toBe(200);
        } catch (error) {
            Promise.reject("Error accured")
        }
      
      
      
    });
    
    it('GET all users', async function ():Promise<void> {
        const response: supertest.Response = await request.get('/users').set('Authorization', 'Bearer ' + TEST_TOKEN);
        expect(response.status).toBe(200);
      });

      it('GET 1 user', async function ():Promise<void> {
        const response: supertest.Response = await request.get('/users/1').set('Authorization', 'Bearer ' + TEST_TOKEN);
        expect(response.status).toBe(200);
      });

      it('Sign in', async function ():Promise<void> {
        const response: supertest.Response = await request.post('/signin').send({
              username:"heshamamoudi",
              password: 'helloworld123',
        });
        expect(response.status).toBe(200);
      });
    });

    describe('Test responses from order endpoints', (): void => {
  
      it('Create user', async function ():Promise<void> {
          try {
            const response: supertest.Response = await request.post('/signup').send({
                firstname: 'raman',
                lastname: 'raghav',
                username:"heshamamoudi",
                password: 'helloworld123',
              });
              
            expect(response.status).toBe(200);
          } catch (error) {
              Promise.reject("Error accured")
          }
        
        
        
      });
      
      it('GET all users', async function ():Promise<void> {
          const response: supertest.Response = await request.get('/users').set('Authorization', 'Bearer ' + TEST_TOKEN);
          expect(response.status).toBe(200);
        });
  
        it('GET 1 user', async function ():Promise<void> {
          const response: supertest.Response = await request.get('/users/1').set('Authorization', 'Bearer ' + TEST_TOKEN);
          expect(response.status).toBe(200);
        });
  
        it('Sign in', async function ():Promise<void> {
          const response: supertest.Response = await request.post('/signin').send({
                username:"heshamamoudi",
                password: 'helloworld123',
          });
          expect(response.status).toBe(200);
        });

});

describe('Test responses from order endpoints', (): void => {
  
  it('Create user', async function ():Promise<void> {
      try {
        const response: supertest.Response = await request.post('/signup').send({
            firstname: 'raman',
            lastname: 'raghav',
            username:"heshamamoudi",
            password: 'helloworld123',
          });
          
        expect(response.status).toBe(200);
      } catch (error) {
          Promise.reject("Error accured")
      }
    
    
    
  });
  
  it('GET all users', async function ():Promise<void> {
      const response: supertest.Response = await request.get('/users').set('Authorization', 'Bearer ' + TEST_TOKEN);
      expect(response.status).toBe(200);
    });

    it('GET 1 user', async function ():Promise<void> {
      const response: supertest.Response = await request.get('/users/1').set('Authorization', 'Bearer ' + TEST_TOKEN);
      expect(response.status).toBe(200);
    });

    it('Sign in', async function ():Promise<void> {
      const response: supertest.Response = await request.post('/signin').send({
            username:"heshamamoudi",
            password: 'helloworld123',
      });
      expect(response.status).toBe(200);
    });
  });

  describe('Test responses from order endpoints', (): void => {

    it('Create user', async function ():Promise<void> {
        try {
          const response: supertest.Response = await request.post('/signup').send({
              firstname: 'raman',
              lastname: 'raghav',
              username:"heshamamoudi",
              password: 'helloworld123',
            });
            
          expect(response.status).toBe(200);
        } catch (error) {
            Promise.reject("Error accured")
        }
      
      
      
    });
    
    it('GET all users', async function ():Promise<void> {
        const response: supertest.Response = await request.get('/users').set('Authorization', 'Bearer ' + TEST_TOKEN);
        expect(response.status).toBe(200);
      });

      it('GET 1 user', async function ():Promise<void> {
        const response: supertest.Response = await request.get('/users/1').set('Authorization', 'Bearer ' + TEST_TOKEN);
        expect(response.status).toBe(200);
      });

      it('Sign in', async function ():Promise<void> {
        const response: supertest.Response = await request.post('/signin').send({
              username:"heshamamoudi",
              password: 'helloworld123',
        });
        expect(response.status).toBe(200);
      });

});

describe('Test responses from product endpoints', (): void => {
  
  it('Create user', async function ():Promise<void> {
      try {
        const response: supertest.Response = await request.post('/signup').send({
            firstname: 'raman',
            lastname: 'raghav',
            username:"heshamamoudi",
            password: 'helloworld123',
          });
          
        expect(response.status).toBe(200);
      } catch (error) {
          Promise.reject("Error accured")
      }
    
    
    
  });
  
  it('GET all users', async function ():Promise<void> {
      const response: supertest.Response = await request.get('/users').set('Authorization', 'Bearer ' + TEST_TOKEN);
      expect(response.status).toBe(200);
    });

    it('GET 1 user', async function ():Promise<void> {
      const response: supertest.Response = await request.get('/users/1').set('Authorization', 'Bearer ' + TEST_TOKEN);
      expect(response.status).toBe(200);
    });

    it('Sign in', async function ():Promise<void> {
      const response: supertest.Response = await request.post('/signin').send({
            username:"heshamamoudi",
            password: 'helloworld123',
      });
      expect(response.status).toBe(200);
    });
  });

  describe('Test responses from order endpoints', (): void => {

    it('Create user', async function ():Promise<void> {
        try {
          const response: supertest.Response = await request.post('/signup').send({
              firstname: 'raman',
              lastname: 'raghav',
              username:"heshamamoudi",
              password: 'helloworld123',
            });
            
          expect(response.status).toBe(200);
        } catch (error) {
            Promise.reject("Error accured")
        }
      
      
      
    });
    
    it('GET all users', async function ():Promise<void> {
        const response: supertest.Response = await request.get('/users').set('Authorization', 'Bearer ' + TEST_TOKEN);
        expect(response.status).toBe(200);
      });

      it('GET 1 user', async function ():Promise<void> {
        const response: supertest.Response = await request.get('/users/1').set('Authorization', 'Bearer ' + TEST_TOKEN);
        expect(response.status).toBe(200);
      });

      it('Sign in', async function ():Promise<void> {
        const response: supertest.Response = await request.post('/signin').send({
              username:"heshamamoudi",
              password: 'helloworld123',
        });
        expect(response.status).toBe(200);
      });

});

      


