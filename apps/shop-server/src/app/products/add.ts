import { Request, Response } from 'express';
import Product from './types/Product';
import addProduct from './util/addProduct';

const add = async (req: Request, res: Response) => {
  const product = req.body as Product;
  addProduct(product);
  res.sendStatus(200);
};
export default add;
