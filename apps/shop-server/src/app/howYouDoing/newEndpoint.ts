import { Request, Response } from 'express';

const newEndpoint = async (req: Request, res: Response) => {
  res.send({ message: 'This is the content of this object' });
};
export default newEndpoint;