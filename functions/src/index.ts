import * as functions from "firebase-functions";
import * as express from "express";
import {addEntry,
  deleteEntry,
  getAllEntries,
  updateEntry,
} from "./entryController";
import {addExtraction} from "./extractionController";
import {addUserProfile} from "./insertUserProfile";

const app = express();
app.get("/", (req, res) => res.status(200).send("Hey there!"));
app.post("/entries", addEntry);
app.post("/userProfile", addUserProfile);
exports.app = functions.https.onRequest(app);
app.get("/entries", getAllEntries);
app.patch("/entries/:entryId", updateEntry);
app.delete("/entries/:entryId", deleteEntry);
app.post("/extraction", addExtraction);
exports.adminAddUserProfile = functions.https.onCall((data)=>{
  addUserProfile(data);
});

