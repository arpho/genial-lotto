export class FetchExtractionNumbers{

  static fetchNumbersFromInputString(data:string){
    return data.split(' ').filter(e=>e!="").map(e => {
      return Number(e)
    })
  }
}