import { stringify } from "querystring";
import { Serializers } from "../modules/helpers/serializers"


export class Extraction {

  _date: string
  dateInmsec: number
  weel: string;
  id:string;
  extraction: string[]
  set date(date: string) {
    this._date = date
    this.dateInmsec = new Date(date).getTime()
  }

  get date() {
    return this._date
  }
  load(v: {}) {
    Object.assign(this, v)
    if(v['date']){
      this.dateInmsec = new Date(v['date']).getTime()
    }
    this.weel= this.weel||v["well"]

  }

  constructor(v?){
    this.load(v)
  }

  serialize() {
    const serializers = new Serializers()
    return {
      "dateInmsec": serializers.serialize2PositiveNumber(this.dateInmsec, -1),
      "weel": serializers.serialize2String(this.weel),
      "extraction": serializers.serialize2Array(this.extraction.map((e)=>{
        return String(e)
      }))

    }
  }

}