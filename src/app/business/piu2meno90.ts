import { TransformationInterface } from "../models/trasformationInterface";

export class Piu2meno90 implements TransformationInterface{
  
  title = "Algoritmo Genial"
    transform (estratto: number) {
        return Math.abs( 90-(estratto +2))

    }

    }
    
