import { TransformationInterface } from "../models/trasformationInterface";

export class Vertibile implements TransformationInterface{
  transform: (estratto: number) => number=(n)=>{
    var out =0
    const decine = Math.floor(n/10)
      const unità = n%10
    if(n%11!=0){ //non  divisibile per 11
      out = unità*10+decine
     if(unità==9 && n>9){
      out =11*decine 
     }
    }
    else{
      out =((decine+1)*10)-1
    }
    return out
  }
  title = "vertibile"
}