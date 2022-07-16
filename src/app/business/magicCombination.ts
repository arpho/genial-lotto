import { FiguralMap } from "./figuralMap"

export class MagicCombination {
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
      out = out -90
    }
    if(input=90){
      out= 1
    }
    return out
  }

  getFigure(index: number) {
    const data = [...this.figures4Weel1, ...this.figures4Weel2]
    return index == 0 ? data[9] : data[index - 1]
  }
  fetchA() {
    return  this.combineFigures(this.figuralMap[0], this.figuralMap[1])
  }

  fetchB() {
    return this.combineFigures(this.figuralMap[2], this.figuralMap[3])
  }
  fetchC() {
    return this.combineFigures(this.figuralMap[4], this.figuralMap[5])
  }

  fetch_d() {
    const a = this.fetchA()
    const b = this.fetchB()
    var out = a + b
    if (out > 90) {
      out = out - 90
    }
    if(out==90){
      out = 1
    }
    return out
  }

  fetch_e(){
    const b= this.fetchB()
    const c = this.fetchC()
    var out = b+c
    if (out > 90) {
      out = out - 90
    }
    if(out==90){
      out = 1
    }
    return out

  }
  fetch_first(){
    return this.fetch_d()+this.fetch_e()
  }

fetch_second(){
  return 90- this.fetch_first()

}
}