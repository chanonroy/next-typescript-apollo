const express = require('express')
const compression = require('compression');
const next = require('next')

import routes from './routes';

const app = next({dev: process.env.NODE_ENV !== 'production'})
const handler = routes.getRequestHandler(app)
const port: number = parseInt(process.env.PORT, 10) || 4000;

app.prepare().then(() => {
    const server = express();

    // next-routes
    server.use(handler);

    // gzip
    server.use(compression());
 
    server.listen(port, '0.0.0.0', err => {
      if (err) {
        throw err;
      }
      // tslint:disable-next-line
      console.log(`🚀  Ready on http://localhost:${port}`);
    });
})
