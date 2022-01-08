import { listAll } from '../controllers/companies.controller';

export default function (app) {
  app.get('/', listAll);
}
