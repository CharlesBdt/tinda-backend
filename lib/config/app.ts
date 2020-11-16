import express from 'express';
import bodyParser from 'body-parser';
import CommonRoutes from '../routes/common.js';
import CardRoutes from '../routes/card.js';

class App {
  public app: express.Application;
  private cardRoutes: CardRoutes = new CardRoutes();
  private commonRoutes: CommonRoutes = new CommonRoutes();

  constructor() {
    this.app = express();
    this.config();
    this.cardRoutes.route(this.app);
    this.commonRoutes.route(this.app);
  }

  private config(): void {
    // support application/json type post data
    this.app.use(bodyParser.json());
    // support application/x-www-form-urlencoded post data
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }
}
export default new App().app;
