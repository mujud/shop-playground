import { Express } from 'express';
import welcome from './welcome';
const hello = (app: Express) => {
  app.get('/welcome', welcome);
};
export default hello;
