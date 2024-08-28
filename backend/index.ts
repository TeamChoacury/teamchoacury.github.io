import * as express from "express";
import { Request, Response } from "express";
import * as proxy from "express-http-proxy";

const app = express.default();

const config = require("./config.json");

// Base URL is /api

app.get("/api", (req: Request, res: Response) => {
    return res.jsonp({ message: "It works!", madeby: "Made with 👍 by MrBisquit" });
});

app.listen(config.port, () => { console.log(`Listening internally on port ${config.port}!`); });