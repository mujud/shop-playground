import { Request, Response } from 'express';

const welcome = async (req: Request, res: Response) => {
  res.send({ message: 'Welcome to shop-server! *' });
};
export default welcome;
