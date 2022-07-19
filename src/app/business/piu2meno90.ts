import { TransformationInterface } from "../models/trasformationInterface";

export class Piu2meno90 implements TransformationInterface{
  
  title = "Algoritmo Genial"
    transform (estratto: number) {
        return (estratto!=88&& estratto!=89)?Math.abs( 90-(estratto +2)):1

    }

    }
    
