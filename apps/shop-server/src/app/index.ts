import { Express } from 'express';
import hello from './hello';
export const init = (app: Express) => {
  const apps = [hello];
  for (const appEntry of apps) {
    appEntry(app);
  }
};
