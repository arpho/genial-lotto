export class DateHelpers{

  converter(date){
    return `${date.split('/')[1]}/${date.split('/')[0]}/${date.split('/')[2]}`
  }
  fromItalian2AmericanFormat(date:string){
    return this.converter(date)
  }
}