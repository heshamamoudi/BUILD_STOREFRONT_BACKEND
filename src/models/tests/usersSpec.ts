import { User,UserStore } from "../user";
const store = new UserStore();

describe('Test responses from endpoints', (): void => {
    let u:User = {
        first_name:'hesham',
        last_name:'amoudi',
        username:'amoudi',
        password:'h123'

      }


    it('GET all users', async function ():Promise<void> {
        const response =await store.index()

        expect(response).toBeTruthy();
      });


      it('Create user', async function ():Promise<void> {
        const response = await store.create(u);

        u=response;
        expect(response).toBeTruthy();
        
      });


      it('update user', async function ():Promise<void> {
      const response = await store.update(u.first_name,"hosni",u.id);
      expect(response).toBeTruthy();
      
    });
    it('Delete user', async function ():Promise<void> {
        const response = await store.delete(u.id+"");
        expect(response).toBeTruthy();
        
      });
      
      
    });