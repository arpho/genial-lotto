import {UserRecord} from "firebase-functions/v1/auth";
import {realtime} from "./configs/firebase";
import {Response, Request} from "express";

const insertUser = async (user: UserRecord)=>{
  const ref = realtime.ref("userProfile");
  ref.push({key: user.uid,
    email: user.email,
  });
};
const addUserProfile = async (req: Request, res: Response) => {
  const ref = realtime.ref("userProfile");
  try {
    ref.push(req);
    res.status(200).send({
      status: "success",
      message: "profile added successfully",
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json(error);
    }
  }
};

export {insertUser, addUserProfile};
