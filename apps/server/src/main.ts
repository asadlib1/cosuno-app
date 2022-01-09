/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import { port, allowedOrigin } from './config/configs';
import * as routes from './routes';
import cors from 'cors';

const app = express();

// setting up cors
const options: cors.CorsOptions = {
  origin: allowedOrigin,
  credentials: true,
};
app.use(cors(options));

routes.default(app);

const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/`);
});
server.on('error', console.error);
