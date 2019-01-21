import { Application } from 'express';
import examplesRouter from './api/controllers/examples/router';
import usersRouter from './api/controllers/users/router';
import groupsRouter from './api/controllers/groups/router';
import cors from 'cors';

export default function routes(app: Application): void {
  app.use(cors({ origin: [ "http://10.10.3.145:3000", "http://10.10.3.127:3001", "http://localhost:3002", "http://localhost:3000", "https://tk-id-admin.herokuapp.com" ], credentials: true, exposedHeaders: ["X-Total-Count"] }));
  app.use('/api/v1/examples', examplesRouter);
  app.use('/api/v1/users', usersRouter);
  app.use('/api/v1/groups', groupsRouter);
};