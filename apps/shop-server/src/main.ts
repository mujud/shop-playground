import * as express from 'express';
import * as cors from 'cors';
import { init } from './app';
const app = express();
app.use(cors());
app.use(express.json());
init(app);
const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
