import { allowedNodeEnvironmentFlags } from "process"
import { FiguralMap } from "./figuralMap"

export class MagicCombination {
  /* per la formula guardare in credentials*/


  private figures4Weel1: number[]
  private figures4Weel2: number[]
  private mask: number[]
  private figuralMap: number[]
  constructor(figures1: number[], figures2: number[], mask: string) {
    this.figures4Weel1 = figures1
    this.figures4Weel2 = figures2
    this.figuralMap = FiguralMap.fetchMap(mask)

  }
  getFiguralMap() {
    return this.figuralMap
  }
  combineFigures(a: number, b: number) {
    const out = this.getFigure(a) * 10 + this.getFigure(b)
    return out

  }

  getTriplet() {
    const a = this.combineFigures(this.mask[0], this.mask[1])
    const b = this.combineFigures(this.mask[2], this.mask[3])
    const c = this.combineFigures(this.mask[4], this.mask[5])
  }
  normalize(input:number){
    var out =input 
    if(input>90){
      out = input -90
    }
    if(input==90){
      out= 1
    }
    return out
  }

  getFigure(index: number) {
    const data = [...this.figures4Weel1, ...this.figures4Weel2]
    return index == 0 ? data[9] : data[index - 1]
  }
  fetchA() {
    return this.normalize( this.combineFigures(this.figuralMap[0], this.figuralMap[1]))
  }

  fetchB() {
    return this.normalize( this.combineFigures(this.figuralMap[2], this.figuralMap[3]))
  }
  fetchC() {
    return this.normalize( this.combineFigures(this.figuralMap[4], this.figuralMap[5]))
  }

  fetch_first(){
    return this.normalize( this.fetch_X()+this.fetch_Y())
  }

fetch_X(){
  return this.normalize(this.fetchA()+this.fetchB())
}

fetch_Y(){
  return this.normalize(this.fetchB()+this.fetchC())
}

fetch_second(){
  return 90- this.fetch_first()

}
}