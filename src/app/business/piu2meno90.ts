import { TransformationInterface } from "../models/trasformationInterface";

export class piu2meno90 implements TransformationInterface{
  
  title = "+2-90"
    transform (estratto: number) {
        return  90-(estratto +2)

    }

    }
    
