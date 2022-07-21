import { TransformationInterface } from "../models/trasformationInterface";

export class Piu2meno90 implements TransformationInterface {

  title = "Più 2 Meno 90"
  transform(estratto: number) {

    var out = Math.abs(90 - (estratto + 2))
    if (estratto == 88) {
      out = -1
    }
    if (estratto == 89) {
      out = 1
    }
    return out
  }

}

