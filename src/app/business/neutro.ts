import { TransformationInterface } from "../models/trasformationInterface";

export class Neutro implements TransformationInterface{
  transform: (estratto: number) => number =(n:number)=>{
    return n
  }
  title: string= "trasformazione neutra"

}