import { Extraction } from "../models/extractionModel";

export class DateHelpers{ 
  static sorterDescendingDate  = (b:Extraction,a:Extraction)=>a.dateInmmsec-b.dateInmmsec
  static sorterAscendingDate = (a:Extraction,b:Extraction)=>a.dateInmmsec-b.dateInmmsec
}