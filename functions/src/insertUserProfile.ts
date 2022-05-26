import {UserRecord} from "firebase-functions/v1/auth";
import {realtime} from "./configs/firebase";

const insertUser = async (user: UserRecord)=>{
  const ref = realtime.ref("userProfile");
  ref.push({key: user.uid,
    email: user.email,
  });
};

export {insertUser};
