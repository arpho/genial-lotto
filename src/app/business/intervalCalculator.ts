import { Extraction } from "../models/extractionModel";
import { Interval } from "../models/interval";
import { DateModel } from "../modules/user/models/birthDateModel";

export class IntervalCalculator{
extractions:Extraction[]
constructor(extractions:Extraction[]){
  this.extractions = extractions
  console.log("##",extractions)
}

retrieveInterval(weel:string,numero:number,date:string):Interval[]
{
const out = []
const extractions4Weel = this.extractions.filter(e=>e.weel==weel)
const startIndex = extractions4Weel.map(e=>new DateModel( new Date(e.dateInmmsec)).ItalianFormatDate()).indexOf(date) // the position where to start retrieving interval from
console.log("startIndex",startIndex)
return out
}
}