import { Express } from 'express';
import hello from './hello';
import howYouDoing from './howYouDoing';
export const init = (app: Express) => {
  const apps = [hello, howYouDoing];
  for (const appEntry of apps) {
    appEntry(app);
  }
};
