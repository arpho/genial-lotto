import { Extraction } from "src/app/models/extractionModel"

export class DateHelpers{
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

   static sorterDescendingDate  = (a:Extraction,b:Extraction)=>a.dateInmmsec-b.dateInmmsec
}