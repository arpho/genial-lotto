export class  OptionsMaker{
  makeOptionFromArray(option:string[]){
    return option.map((value,index)=>{
      return {key: value,value: index}
    })
  }
}