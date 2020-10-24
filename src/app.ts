import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

import routes from "./start/routes";

class App {
  public server: http.Server;
  protected express: express.Application;

  constructor() {
    this.express = express();
    this.server = http.createServer(this.express);
    this.start();
  }

  private start(): void {
    this.express.use(bodyParser.urlencoded({ extended: true }));
    this.express.use(bodyParser.json());
    this.express.use(cookieParser());
    this.express.use(routes);
  }
}

export default new App().server;
