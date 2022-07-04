import { Extraction } from "../models/extractionModel";
import { Interval } from "../models/interval";
import { DateModel } from "../modules/user/models/birthDateModel";

export class IntervalCalculator{
extractions:Extraction[]
constructor(extractions:Extraction[]){
  this.extractions = extractions
}

retrieveInterval(weel:string,numero:number,date:string):Interval[]
{
const intervals = []
const extractions4Weel = this.extractions.filter(e=>{ 
  return e.weel==weel})
  console.log("#* extraction 4 weel",extractions4Weel)
const startIndex = extractions4Weel.map(e=>new DateModel( new Date(e.dateInmmsec)).ItalianFormatDate()).indexOf(date) // the position where to start retrieving interval from
var count=0
console.log("start index #*",startIndex)
for( let i = startIndex+1; i< extractions4Weel.length;i++){
  count+=1
  console.log("iterating#*",extractions4Weel[i],extractions4Weel[i].extraction.includes(numero))
  if(extractions4Weel[i].extraction.includes(numero)){
    const interval = new Interval(count,extractions4Weel[i].italianDate)
    console.log("pushing #*",interval)
    intervals.push(interval)
    count =0 // reset the counter
  }


}
console.log("intervals *#",intervals)

return intervals
}
}