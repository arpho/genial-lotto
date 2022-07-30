import { Extraction } from "src/app/models/extractionModel"

export class Utilities4Date{
  static getDateListFrom(extractionsItems: Extraction[]): string[] {
   return Array.from(new Set(extractionsItems.map(e=>e.italianDate)))
  }

  converter(date){
    return `${date.split('/')[1]}/${date.split('/')[0]}/${date.split('/')[2]}`
  }

  fromDatePickerFormat2ItalianFormat(date:string){
    const splitDate = date.split('-')
    return `${splitDate[2]}/${splitDate[1]}/${splitDate[0]}`
  }
  fromItalian2AmericanFormat(date:string){
    return this.converter(date)
  }
  private static  mSecIn24H= 1000*60*60*24
   static sorterDescendingDate  = (a:Extraction,b:Extraction)=>a.dateInmmsec-b.dateInmmsec

   static addDays2Date=(day:Date,days:number)=> new Date(day.getTime()+this.mSecIn24H*days)
}