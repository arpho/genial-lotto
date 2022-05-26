import { Serializers } from "../modules/helpers/serializers"


export class Extraction {

  _date: string
  dateInmsec: number
  weel: string;
  id:string;
  extraction: number[]
  set date(date: string) {
    this._date = date
    this.dateInmsec = new Date(date).getTime()
    console.log("#* mms",this.dateInmsec)
  }

  get date() {
    return this._date
  }
  load(v: {}) {
    Object.assign(this, v)
    if(v['date']){
      console.log("#* date",v['date'])
      this.dateInmsec = new Date(v['date']).getTime()
      console.log("#* this",this)
    }
    this.weel= this.weel||v["well"]
    this.extraction = this.extraction.map(e=>{ // from firestore  we get a string []
      return Number(e)
    })

  }

  constructor(v?){
    this.load(v)
  }

  serialize() {
    const serializers = new Serializers()
    return {
      "dateInmsec": serializers.serialize2PositiveNumber(this.dateInmsec, -1),
      "weel": serializers.serialize2String(this.weel),
      "extraction": serializers.serialize2Array(this.extraction)

    }
  }

}