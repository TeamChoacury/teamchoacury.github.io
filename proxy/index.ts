import * as express from "express";
import { Request, Response } from "express";
import * as proxy from "express-http-proxy";

const app = express.default();

const config = require("./config.json");

app.get("/api", proxy.default(`http://localhost:${config.port}/`));

app.listen(config.port, () => { console.log(`Listening internally on port ${config.port}!`); });