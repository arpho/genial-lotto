export class MagicCombination{
  private figures4Weel1: number[]
  private figures4Weel2: number[]
  private mask: number[]
  constructor(figures1:number[],figures2:number[],mask:number[]){
    this.figures4Weel1 = figures1
    this.figures4Weel2 = figures2
    this.mask= mask

  }
combineFigures(a:number,b:number){
  const out = this.getFigure(a)*10+this.getFigure(b)
  return out

}

  getTriplet(){
    const a = this.combineFigures(this.mask[0],this.mask[1])
    const b = this.combineFigures(this.mask[2],this.mask[3])
    const c = this.combineFigures(this.mask[4],this.mask[5])
  }

  getFigure(index:number){
    const data = [...this.figures4Weel1,...this.figures4Weel2]
    return index==0?data[9]:data[index+1]
  }
}