import 'dotenv/config';

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
// import redis from 'redis';
// import RateLimit from 'express-rate-limit';
// import RateLimitRedis from 'rate-limit-redis';
import Youch from 'youch';
// import * as Sentry from '@sentry/node';
// import sentryConfig from './config/sentry';
import 'express-async-errors';

import routes from './routes';

// Uncomment this line to enable database access
// --------
import './database';

class App {
  constructor() {
    this.server = express();
    // Sentry config
    // if (process.env.NODE_ENV !== 'development') {
    //   this.initSentry();
    // }

    this.middlewares();
    this.routes();
    this.exceptionHandler();
  }

  // Sentry config
  // initSentry() {
  //   Sentry.init(sentryConfig);
  //   this.server.use(Sentry.Handlers.requestHandler());
  // }

  middlewares() {
    this.server.use(express.json());
    this.server.use(cors({ origin: false }));
    this.server.use(helmet());

    // if (process.env.NODE_ENV !== 'development') {
    //   this.server.use(
    //     new RateLimit({
    //       store: new RateLimitRedis({
    //         client: redis.createClient({
    //           host: process.env.REDIS_HOST,
    //           port: process.env.REDIS_PORT,
    //         }),
    //       }),
    //       windowMs: 1000 * 60 * 15,
    //       max: 100,
    //     })
    //   );
    // }
  }

  routes() {
    this.server.use(routes);

    // Sentry config
    // if (process.env.NODE_ENV !== 'development') {
    //   this.server.use(Sentry.Handlers.errorHandler());
    // }
  }

  exceptionHandler() {
    this.server.use(async (err, req, res, next) => {
      if (process.env.NODE_ENV === 'development') {
        const errors = await new Youch(err, req).toJSON();

        return res.status(500).json(errors);
      }

      return res.status(500).json({ error: 'Internal server error' });
    });
  }
}

export default new App().server;
