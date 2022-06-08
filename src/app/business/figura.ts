import { TransformationInterface } from "../models/trasformationInterface";

export class Figura implements TransformationInterface{
    title = "figura"
    transform: (estratto: number) => number=(estratto:number)=>{
        const quoziente =Math.floor(estratto/10)
        const resto= estratto%10
        return estratto<=9?estratto:this.transform(quoziente+resto)
    }
}