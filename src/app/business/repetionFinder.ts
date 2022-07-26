import { Vertibile } from "./vertibile"

export class RepetitionsFinder{
  extraction:number[]

  constructor(extraction:number[]){
    this.extraction = extraction
  }

  fetchEchoedNumbers(repetitionsMap:number[]){
    return repetitionsMap.map((v,i)=>{
      return v==1? this.extraction[i]:null
    }).filter(e=> e!=null)

  }
  reflectArrayAndRemoveDuplicated(list2check:number[]):number[]{
    const out= []
    list2check.forEach(e=>{
      out.push(e)
      out.push(new Vertibile().transform(e))
    })
    return Array.from(new Set(out))

  }

  findRepetitions(otherWeel?:number[]){
    const vertibile= new Vertibile()
    const output = this.extraction.map(item=>{
      return this.extraction.includes(vertibile.transform(item))||otherWeel?.includes(item)||/*controllo se i
       numeri dell'altra ruota o 
      se i loro vertibili sono presenti nel +2-90 della ruota*/
      otherWeel?.includes(vertibile.transform(item))
      ?1:0
    })
    return  output
  }

}