import * as express from 'express';
import { User, UserStore } from '../models/user';
import * as jwt from 'jsonwebtoken';
const store = new UserStore();


export const authToken = (req: express.Request,res: express.Response,next: express.NextFunction):
 void => {
  try {
    const authorizationHeader: string = req.headers.authorization as string;
    const token: string = authorizationHeader.split(' ')[1];
    jwt.verify(token, process.env.TOKEN_SECRET as string);
    next();
    return
  } catch (error) {
    res.status(401);
  }
};



const index = async (req: express.Request, res: express.Response) => {
  try { 
     const user = await store.index();
      res.json(user);
  } catch (err) {
    res.status(400);
    res.json(err);
    
  }

};

const Show = async (req: express.Request, res: express.Response) => {
  try {
    const user = await store.show(req.params.id);
    res.json(user);
  } catch (err) {
    res.status(400);
    res.json(err);
    
  }

  
};

const Create = async (req: express.Request, res: express.Response) => {
  let data = req.body;
  const user: User = {
    first_name:data.first_name,
    last_name:data.last_name,
    username: data.username,
    password: data.password
  };
  try {
    const newUser = await store.create(user);
    var token = jwt.sign({ user: newUser }, process.env.TOKEN_SECRET);

    res.json(token);
  } catch (err) {
    res.status(400);
    res.json(err + user);
  }
};

const signin = async (req: express.Request, res: express.Response) => {
  let data = req.body;
  const id: string = req.params.id
  const password: string = data.password as string;

  try {
    const user = await store.authenticate(id, password);
    switch(true){
      case  (user !== null):
      const token = jwt.sign(id, process.env.TOKEN_SECRET);
      res.json(token);
      break;
      case  (user === null):
        res.json('Please use Sign up!');
        break;
    }
  } catch (error) {
    res.status(401);
    res.json({ error });
  }
};

// const Delete = async (req : express.Request, res: express.Response) =>{
//             const user = await store.delete('1')
//             res.json(user);
//             }

// const Update = async (req : express.Request, res: express.Response) => {
//     let data = req.body;

//     try {
//         const decoded = jwt.verify(data.token,TOKEN_SECRET);
//         if(decoded['user'].id !== parseInt(req.params.id)) {
//             throw new Error('User id does not match!')
//         }
//     } catch(err) {
//         res.status(401)
//         res.json(err + "something accured")
//         return
//     }

//     try {
//         const updated = await store.update(data.first_name,data.last_name,parseInt(req.params.id))
//         res.json(updated)
//     } catch(err) {
//         res.status(400)
//         res.json(err + data.first_name)
//     }
// }

const user_routes = (app: express.Application) => {
  app.get('/users',authToken ,index);
  app.get('/users/:id', authToken,Show);
  app.get('/users/:id/signin', signin);
  app.post('/signup', Create);
  // app.put('/users/:id', Update)
  // app.delete('/users/:id',Delete)
};

export default user_routes;
