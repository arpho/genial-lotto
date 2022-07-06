import { transform } from "typescript"
import { Interval } from "../models/interval"

export class makeData4D3{
  transform(intervals:Interval[]){
    return intervals.map((element,i)=>{return {
      "id":i,
      "interval":element.interval,
      "date":element.date
    }
  })
  }
}