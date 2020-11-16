import { Application, Request, Response } from 'express';

export default class CommonRoutes {
  public route(app: Application) {
    app.all('*', (req: Request, res: Response) => {
      res.status(404).json({ error: true, message: 'Non-existing endpoint' });
    });
  }
}
