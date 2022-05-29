import { stringify } from "querystring";
import { Serializers } from "../modules/helpers/serializers"


export class Extraction {

  _date: string
  _dateInmsec: number
  weel: string;
  _id:string;
  extraction: string[]
  set date(date: string) {
    this._date = date
    this._dateInmsec = new Date(date).getTime()
  }
  set dateInmmsec(date){
    this._dateInmsec= date
    const data = new Date(date)
    this._date= `${this.format2Digit(data.getMonth()+1)}/${this.format2Digit(data.getDate())}/${data.getFullYear()}`
    this.weel= this.weel||date["well"]

  }

  format2Digit(m:number){
    return m>9?String(m): `0${m}`
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


  load(v: {}) {
    Object.assign(this, v)
    if(v['date']){
      this._dateInmsec = new Date(v['date']).getTime()
    }
    this.weel= this.weel||v["well"]

  }

  constructor(v?: {}){
    this.load(v)
  }

  serialize() {
    const serializers = new Serializers()
    return {
      "dateInmsec": serializers.serialize2PositiveNumber(this._dateInmsec, -1),
      "weel": serializers.serialize2String(this.weel),
      "extraction": serializers.serialize2Array(this.extraction)

    }
  }

}