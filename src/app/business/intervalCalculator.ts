import { Extraction } from "../models/extractionModel";
import { Interval } from "../models/interval";
import { DateModel } from "../modules/user/models/birthDateModel";

export class IntervalCalculator{
extractions:Extraction[]
constructor(extractions:Extraction[]){
  this.extractions = extractions

  
}

retrieveInterval(weel:string,numero:number,date?:string):Interval[]
{
const intervals = []
const extractions4Weel = this.extractions.filter(e=>{ 
  return e.weel==weel})

const startIndex = 0 //we strat from the most recent extraction extractions4Weel.map(e=>new DateModel( new Date(e.dateInmmsec)).ItalianFormatDate()).indexOf(date) // the position where to start retrieving interval from
var count=0
for( let i = startIndex; i< extractions4Weel.length;i++){
  count+=1
  if(extractions4Weel[i].extraction.includes(numero)){
    const interval = new Interval(count,extractions4Weel[i].italianDate)
    intervals.push(interval)
    count =0 // reset the counter
  }


}

return intervals
}
}