import * as express from "express";
import {User,UserStore } from '../models/user';
import * as jwt from 'jsonwebtoken'
const store = new UserStore();


const index = async (req : express.Request, res: express.Response) =>{
  const data = req.body;
  try {
    const decoded = jwt.verify(data.token,process.env.TOKEN_SECRET);
    if(decoded['user'].id !== parseInt(req.params.id)) {
        throw new Error('Cant access to another User ID !')
    }
} catch(err) {
    res.status(401)
    res.json(err)
    return
}
const user = await store.index()
res.json(user);
}

const Show = async (req : express.Request, res: express.Response) =>{
  const data = req.body;
  try {
    const decoded = jwt.verify(data.token,process.env.TOKEN_SECRET);
    if(decoded['user'].id !== parseInt(req.params.id)) {
        throw new Error('Cant access to another User ID !')
    }
} catch(err) {
    res.status(401)
    res.json(err)
    return
}
    
    const user = await store.show(req.params.id)
    res.json(user);
    }

const Create = async (req : express.Request, res: express.Response) =>{
  let data = req.body;
   const user: User = {
          username: data.username,
          password: data.password
        }
      try{
        
          const newUser = await store.create(user)
          var token = jwt.sign({user:newUser},process.env.TOKEN_SECRET);

        res.json(token);

      }catch(err){
        res.status(400)
        res.json(err + user)
      }
        
        }


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
            
            

const user_routes = (app: express.Application)=>{
app.get('/users', index)
app.get('/users/:id',Show)
app.post('/signup', Create)
// app.put('/users/:id', Update)
// app.delete('/users/:id',Delete)
};


export default user_routes;