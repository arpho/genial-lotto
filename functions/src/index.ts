import * as functions from "firebase-functions";
import * as express from "express";
import * as admin from "firebase-admin";
import {addEntry,
  deleteEntry,
  getAllEntries,
  updateEntry,
} from "./entryController";
import {addExtraction} from "./extractionController";
import {addUserProfile} from "./insertUserProfile";
if (admin.apps.length === 0) {
  admin.initializeApp();
}
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

exports.addCustomClaim = functions.https.onCall((data) => {
  return admin.auth().getUserByEmail(data.email).then((user) => {
    return admin.auth().setCustomUserClaims(user.uid, data.claim).then(() => {
      return {
        message: ` Success!claim ${Object.keys(data.claim)} 
        as been set on ${data.email}`,
      };
    }).catch((err) => {
      return {error: err, data: data};
    });
  });
});

