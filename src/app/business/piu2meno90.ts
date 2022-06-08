import { TransformationInterface } from "../models/trasformationInterface";

export class Piu2meno90 implements TransformationInterface{
  
  title = "+2-90"
    transform (estratto: number) {
        return Math.abs( 90-(estratto +2))

    }

    }
    
