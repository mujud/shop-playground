import { Express } from 'express';
import hello from './hello';
import howYouDoing from './howYouDoing';
import products from './products';
export const init = (app: Express) => {
  const apps = [hello, howYouDoing, products];
  for (const appEntry of apps) {
    appEntry(app);
  }
};
