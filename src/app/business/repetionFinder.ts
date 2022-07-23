import { Vertibile } from "./vertibile"

export class RepetitionsFinder{
  extraction:number[]

  constructor(extraction:number[]){
    this.extraction = extraction
  }

  fetchRepetitions(repetitionsMap:number[]){
    return repetitionsMap.map((v,i)=>{
      return v==1? this.extraction[i]:null
    }).filter(e=> e!=null)

  }

  findRepetitions(otherWeel?:number[]){
    const vertibile= new Vertibile()
    const output = this.extraction.map(item=>{
      return this.extraction.includes(vertibile.transform(item))||otherWeel?.includes(item)||
      otherWeel?.includes(vertibile.transform(item))
      ?1:0
    })
    return  output
  }

}