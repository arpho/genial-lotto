import { Vertibile } from "./vertibile"

export class RepetitionsFinder{
  extraction:number[]

  constructor(extraction:number[]){
    this.extraction = extraction
  }

  findRepetitions(otherWeel?:number[]){
    const vertibile= new Vertibile()
    return this.extraction.map(item=>{
      return this.extraction.includes(vertibile.transform(item))||otherWeel?.includes(item)||
      otherWeel?.includes(vertibile.transform(item))
      ?1:0
    })
  }

}