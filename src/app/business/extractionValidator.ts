export class ExtractionValidator{
isValid(extraction:number[]){
 return extraction.map(e=>{
    return typeof e =='number' && e<=90 && Number.isInteger(e) && e>0?1:0
  }).reduce((pv,cv)=>{
    return pv+cv
  },0)==5
}
}