import * as express from "express";
import { Request, Response } from "express";
import * as proxy from "express-http-proxy";

const app = express.default();

app.get("/", (req: Request, res: Response) => {
    return res.jsonp({ message: "It works!" });
});

app.listen(80, () => { console.log("Listening on port 80!"); });