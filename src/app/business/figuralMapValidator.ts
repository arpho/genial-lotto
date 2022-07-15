export class FiguralMapValidator{
  static splitNumbers(input:number){
    const dec = Math.floor(input/10)
    const unity = input%10
    return [unity,dec]
  }

  static fetchMap(figuralMap:string){
  let output:any[] = []
  if (this.isValid(figuralMap)){
    output = figuralMap.split('.')
   var  out:number[]= []
   output.forEach(n=>{out.push(this.splitNumbers(n)[1])
    out.push(this.splitNumbers(n)[0])

   })
  }
    return out
  }
  static isValid(figuralMap:string){
    return figuralMap.split('.').map(e=>{
      return typeof Number.isInteger(e) && 
      Number(e)>0 && 
      Number(e)<100?1:0
    }).reduce((pv,cv)=>{
      return pv+cv
    },0)==3
  }
}