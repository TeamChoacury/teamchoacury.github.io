import * as express from "express";
import { Request, Response } from "express";
import * as proxy from "express-http-proxy";

const app = express.default();

app.get("/api", proxy.default("http://localhost:90/"));

app.listen(80, () => { console.log("Listening on port 80!"); });