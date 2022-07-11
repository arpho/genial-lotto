import { Vertibile } from "./vertibile"

export class RepetitionsFinder{
  extraction:number[]

  constructor(extraction:number[]){
    this.extraction = extraction
  }

  findRepetitions(){
    const vertibile= new Vertibile()
    return this.extraction.map(item=>{
      return this.extraction.includes(vertibile.transform(item))?1:0
    })
  }

}