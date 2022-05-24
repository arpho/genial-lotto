import * as functions from "firebase-functions";
import * as express from "express";
import {addEntry,
  deleteEntry,
  getAllEntries,
  updateEntry,
} from "./entryController";
import {addExtraction} from "./extractionController";

const app = express();
app.get("/", (req, res) => res.status(200).send("Hey there!"));
app.post("/entries", addEntry);
exports.app = functions.https.onRequest(app);
app.get("/entries", getAllEntries);
app.patch("/entries/:entryId", updateEntry);
app.delete("/entries/:entryId", deleteEntry);
app.post("/extraction", addExtraction);