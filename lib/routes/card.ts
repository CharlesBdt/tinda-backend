import { Application, Request, Response } from 'express';

export default class CardRoutes {
  public route(app: Application) {
    app.get('/api/cards', (req: Request, res: Response) => {
      res.status(200).json({ message: 'Successfull GET' });
    });
  }
}
