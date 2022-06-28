import { stringify } from "querystring";
import { ExtractionValidator } from "../business/extractionValidator";
import { DateHelpers } from "../modules/helpers/dateHelper";
import { Serializers } from "../modules/helpers/serializers"
import { Genere, ItemModelInterface } from "../modules/item/models/itemModelInterface";
import { ItemServiceInterface } from "../modules/item/models/ItemServiceInterface";
import { QuickAction } from "../modules/item/models/QuickAction";
import { Value } from "../modules/item/models/value";
import { TransformationInterface } from "./trasformationInterface";


export class Extraction implements ItemModelInterface {

  _date: string
  _dateInmsec: number
  weel: string;
  _id:string;
  transformation:TransformationInterface
  italianDate
 

  _extraction: number[]
  set extraction(data:number[]){
    const validator = new ExtractionValidator()
    if(validator.isValid(data)){
    this._extraction = data
  }
else{
  
  throw new Error(`estrazione non valida ${data}`)
}
  }
get extraction(){
  return this.transformation? this._extraction.map(this.transformation.transform): this._extraction
}



  set date(date: string) {
    const converter = new DateHelpers()
    this._date = converter.fromItalian2AmericanFormat( date)
    this.italianDate = date

    this._dateInmsec = new Date(converter.fromItalian2AmericanFormat( date)).getTime()

  }
  set dateInmmsec(date){
    this._dateInmsec= date
    const data = new Date(date)
    this._date= `${this.format2Digit(data.getDate())}/${this.format2Digit(data.getMonth()+1)}/${data.getFullYear()}`
    this.weel= this.weel||date["well"]

  }

  format2Digit(m:number){
    return m>9?String(m): `0${m}`
  }

  
  get title(){
    return this.transformation?`${this.transformation.title} sulla ruota di  ${this.weel}`:` ${this.weel}`
   }

  apply(transformation:TransformationInterface){
    this.transformation = transformation
    this.extraction = this.extraction.map(transformation.transform)
    return this
  }

  get date(){
    return this._date
  }
  setId(id:string){
    this._id= id
    return this

  }


  get id(){
    return this._id
  }
  set id(id:string){
    this._id= id

  }

  get dateInmmsec(){
    return this._dateInmsec
  }


  load(v: {}) {
    if(v){// the extraction setter validates the input  then we have to sanitize extraction before Object.assign
      if(v['extraction']){
        v['extraction']= v['extraction'].map(e=>{
          return Number(e)
        })
      }
    Object.assign(this, v)
    if(this.extraction){
    this.extraction= this.extraction.map((e)=>{
      return Number(e)
    })}
    if(v&&v['date']){
      const converter = new DateHelpers()
      this._dateInmsec = new Date(converter.fromItalian2AmericanFormat( v['date'])).getTime()
    }
  }

  }

  constructor(v?: {}){
    this.load(v)
  }
  note?: string;
  key: string;
  quickActions?: QuickAction[];
  archived?: boolean;
  service?: ItemServiceInterface;
  getTitle(): Value {
    throw new Error("Method not implemented.");
  }
  getCountingText(): { singular: string; plural: string; } {
    return {singular:"estrazioone",plural:"estrazioni"}
  }
  getNote(): Value {
   return new Value({value:"",label:"nota"})
  }
  build?(item: {}) {
   return this.load(item);
  }
  isArchived?(): boolean {
    return false
  }
  archiveItem?(b: boolean) {
    
  }
  isArchivable?(): boolean {
  return false
  }
  getValue2(): Value {
    return new Value({value:this.weel,label:"ruota di"})
  }
  getValue3(): Value {
    return new Value({value:this.date,label:"estrazione del"})
  }
  getValue4(): Value {
    return new Value({value:this.extraction.join('-'),label:"numeri estratti"})
  }
  setKey?(key: string): ItemModelInterface {
    this.key = key
    return this
  }
  getEditPopup(item?: ItemModelInterface, service?: ItemServiceInterface) {
    throw new Error("Method not implemented.");
  }
  initialize(item: {}): ItemModelInterface {
    throw new Error("Method not implemented.");
  }
  getAggregate(): Value {
    throw new Error("Method not implemented.");
  }
  hasQuickActions?(): boolean {
    return false
  }
  getElement(): { element: string; genere: Genere; } {
    return {element:"estrazione",genere:'a'}
  }

  serialize() {
    const serializers = new Serializers()
    return {
      "date":serializers.serialize2String(this.date),
      "dateInmsec": serializers.serialize2PositiveNumber(this._dateInmsec, -1),
      "weel": serializers.serialize2String(this.weel),
      "extraction": serializers.serialize2Array(this._extraction)

    }
  }

}