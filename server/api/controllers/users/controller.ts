import UserService from '../../services/user.service';
import { Request, Response } from 'express';
export class Controller {
  all(req: Request, res: Response): void {
    const search = req.query._q ? req.query._q.trim() : '';
    const start = req.query._start ? req.query._start : 0;
    const end = req.query._end ? req.query._end : 10;
    const order = req.query._order ? req.query._order : 1;
    const sort = req.query._sort ? { [req.query._sort]: order } : { updatedAt: order };
    const filter = {};
    UserService
      .all(filter, search, start, end - start + 1, sort)
      .then((page) => {
        res.setHeader('X-Total-Count', page.total.toString());
        res.json(page.docs);
    });
  }

  create(req: Request, res: Response): void {
    UserService.create(req.body).then(r =>
      res
         .status(201)
         .location(`<%= apiRoot %>/user/${r._id}`)
         .json(r),
    ).catch(err => 
          res.status(503)
          .json('Save error' + err)
    );
  }
  byId(req: Request, res: Response): void {
    UserService.byId(req.params._id).then(r => res.json(r));
  }
  update(req: Request, res: Response): void {
    UserService.update(req.params._id, req.body).then(r => res.json(r));
  }
  delete(req: Request, res: Response): void {
    UserService.delete(req.params._id).then(r => res.json(r));
  }
}
export default new Controller();