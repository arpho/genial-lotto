import { Extraction } from "../models/extractionModel";

export class DateHelpers{ static sorterDescendingDate  = (a:Extraction,b:Extraction)=>a.dateInmmsec-b.dateInmmsec
}