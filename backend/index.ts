import * as express from "express";
import { Request, Response } from "express";
import * as proxy from "express-http-proxy";

const app = express.default();

// Base URL is /api

app.get("/api", (req: Request, res: Response) => {
    return res.jsonp({ message: "It works!", madeby: "Made with 👍 by MrBisquit" });
});

app.listen(90, () => { console.log("Listening internally on port 90!"); });