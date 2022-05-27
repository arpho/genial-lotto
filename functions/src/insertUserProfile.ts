import {UserRecord} from "firebase-functions/v1/auth";
import {realtime} from "./configs/firebase";

const insertUser = async (user: UserRecord)=>{
  const ref = realtime.ref("userProfile");
  ref.push({key: user.uid,
    email: user.email,
  });
};
const addUserProfile = async (data: Record<string, never>) => {
  const ref = realtime.ref("userProfile");
  try {
    ref.push(data);
    return {status: 200,
      message: " userProfile added correctly"};
  } catch (error: unknown) {
    return {status: 500,
      message: error};
  }
};
export {insertUser, addUserProfile};
