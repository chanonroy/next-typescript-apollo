import * as compression from "compression";
import * as express from "express";
import * as next from "next";

import routes from "./routes";

// configure env variables
require("dotenv").config(); // tslint:disable-line

const port: number = parseInt(process.env.PORT, 10) || 3000;
const dev: boolean = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
  const server = express();

  // gzip
  server.use(compression());

  // next-routes
  server.use(handler);

  server.listen(port, "0.0.0.0", err => {
    if (err) {
      throw err;
    }
    // tslint:disable-next-line
    console.log(`🚀  Ready on http://localhost:${port}`);
  });
});
