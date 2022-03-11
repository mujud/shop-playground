import { Request, Response } from 'express';
import getProducts from './util/getProducts';

const list = async (req: Request, res: Response) => {
  res.send(getProducts());
};
export default list;
