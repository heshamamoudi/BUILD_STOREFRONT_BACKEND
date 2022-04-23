import { User,UserStore } from "../user";
const store = new UserStore();

describe('Test responses from user model', (): void => {
  let user:User;
  beforeAll(async function():Promise<void>{
    try {
       const response = await store.create({
      first_name:'hesham',
      last_name:'amoudi',
      username:'amoudi',
      password:'h123'

    }); user=response;

    } catch (error) {
      throw new Error("failed to create user")
    }
    
  })
    

    it('GET all users', async function ():Promise<void> {
        const response =await store.index()

        expect(response).toBeTruthy();
      });


     


      it('update user', async function ():Promise<void> {
      const response = await store.update(user.first_name,"hosni",user.id);
      expect(response).toEqual({
        id:user.id,
        first_name:'hesham',
        last_name:'hosni',
        username:'amoudi',
        password:user.password
      });
      
    });




    // it('Delete user', async function ():Promise<void> {
    //     const response = await store.delete("1");
    //     expect(response).toBeTruthy();
        
    //   });
      
      
    });