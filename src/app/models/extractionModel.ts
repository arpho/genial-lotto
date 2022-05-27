import { stringify } from "querystring";
import { Serializers } from "../modules/helpers/serializers"


export class Extraction {

  _date: string
  _dateInmsec: number
  weel: string;
  id:string;
  extraction: string[]
  set date(date: string) {
    this._date = date
    this._dateInmsec = new Date(date).getTime()
  }
  set dateInmmsec(date){
    this._dateInmsec= date
    const data = new Date(date)
    this._date= `${data.getMonth()+1}/${data.getDate()}/%${data.getFullYear}`
    this.weel= this.weel||date["well"]

  }

  constructor(v?){
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