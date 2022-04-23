import * as express from 'express';
import * as jwt from 'jsonwebtoken';

export const authToken = (req: express.Request,res: express.Response,next: express.NextFunction):
 void => {
  try {
    const authorizationHeader: string = req.headers['authorization'];
    const token: string = authorizationHeader.split(' ')[1];
    jwt.verify(token, process.env.TOKEN_SECRET);
    next();
    
  } catch (error) {
    res.status(401).send("access denied!");
  }
};