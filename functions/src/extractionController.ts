import {Response} from "express";
import {db} from "./configs/firebase";

type ExtractionType = {
  date:string,
  weel:string,
  extraction:number[]
};

type Request = {
  body: ExtractionType,
  params: { entryId: string }
};

const addExtraction = async (req: Request, res: Response) => {
  const {date, weel: well, extraction} = req.body;
  try {
    const extractionDocument = db.collection("extractions").doc();
    const extractionObject = {
      id: extractionDocument.id,
      well: well,
      date: date,
      extraction: extraction,
    };
    extractionDocument.set(extractionObject);
    res.status(200).send({
      status: "success",
      message: "estrazione inserita correttamente",
      data: extractionObject,
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json(error.message);
    }
  }
};

export {addExtraction};
