export class  OptionsMaker{
  makesOptionsFromArray(option:string[]){
    return option.map((value,index)=>{
      return {key: value,value: index}
    })
  }
}