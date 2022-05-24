import { Serializers } from "../modules/helpers/serializers"


export class Extraction {

  _date: string
  dateInmsec: number
  weel: string;
  extraction: number[]
  set date(date: string) {
    this._date = date
    this.dateInmsec = new Date(date).getMilliseconds()
  }

  get date() {
    return this._date
  }
  load(v: {}) {
    Object.assign(this, v)

  }

  serializer() {
    const serializers = new Serializers()
    return {
      "dateInmsec": serializers.serialize2PositiveNumber(this.dateInmsec, -1),
      "weel": serializers.serialize2String(this.weel),
      "extraction": serializers.serialize2Array(this.extraction)

    }
  }

}