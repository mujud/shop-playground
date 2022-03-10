import { Express } from 'express';
import newEndpoint from './newEndpoint';
const howYouDoing = (app: Express) => {
  app.get('/newEndpoint', newEndpoint);
};
export default howYouDoing;
