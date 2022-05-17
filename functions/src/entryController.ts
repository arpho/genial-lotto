import {Response} from "express";
import {db} from "./configs/firebase";

type EntryType = {
  title: string,
  text: string,
  coverImageUrl: string
};

type Request = {
  body: EntryType,
  params: { entryId: string }
};

const addEntry = async (req: Request, res: Response) => {
  const {title, text} = req.body;
  try {
    const entry = db.collection("entries").doc();
    const entryObject = {
      id: entry.id,
      title,
      text,
    };

    entry.set(entryObject);

    res.status(200).send({
      status: "success",
      message: "entry added successfully",
      data: entryObject,
    });
  } catch (error:unknown) {
    if (error instanceof Error) {
      res.status(500).json(error.message);
    }
  }
};
export {addEntry};

