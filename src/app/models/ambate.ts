import { Vertibile } from "../business/vertibile"

export class Ambate{
  weel1:string
  weel2:string
  _ambata11:number
  _ambata12:number
  _ambata21:number
  _ambata22:number
  set ambata11 (ambata){
    this._ambata11= ambata
    this._ambata21 = new Vertibile().transform(ambata)
  }
  get ambata11(){
    return this._ambata11
  }
  set ambata21(ambata:number){
    this._ambata21=ambata
    this._ambata22 =new Vertibile().transform(ambata)
  }
  get ambata22(){
    return this._ambata22
  }
  get ambata12(){
    return this._ambata12
  }
  get ambata21(){
    return this._ambata21
  }
  constructor(data:{weel1:string,
    weel2:string,
    ambata11:number,
  ambata21:number}){
    this.weel1= data.weel1
    this.weel2= data.weel2
    this.ambata11=data.ambata11
    this.ambata21=data.ambata21
  }

}