import * as functions from "firebase-functions";
import * as express from "express";

const app = express();
app.get("/", (req, res) => res.status(200).send("Hey there!"));
exports.app = functions.https.onRequest(app);
