import { Express } from 'express';
import list from './list';
import add from './add';
const products = (app: Express) => {
  app.get('/products', list);
  app.post('/products', add);
};
export default products;
