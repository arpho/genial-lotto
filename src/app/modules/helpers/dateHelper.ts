export class DateHelpers{
  fromItalian2AmericanFormat(date:string){
    return `${date.split('/')[1]}/${date.split('/')[0]}/${date.split('/')[2]}`
  }
}