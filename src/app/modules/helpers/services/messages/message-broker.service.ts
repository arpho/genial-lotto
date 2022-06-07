import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageBrokerService {
  _brokers= {}
  brokers= {}

  addBroker(key:string){
    const _broker: BehaviorSubject<{}>= new BehaviorSubject("")
    if(!this._brokers[key]){
      this._brokers[key]= _broker
      const broker:Observable<{}>=_broker.asObservable()
      this.brokers[key]= broker
      
    }
  }
  subscribeTo(key:string,next:(message:string)=>void){
    return this.brokers[key]?this.brokers[key].subscribe(next):undefined
  }
  brokersList(){
    return Object.keys(this.brokers)
  }
  publish(key:string,msg:{}){
    var out = true
    if(this._brokers[key]){
      this._brokers[key].next(msg)
    }
    else{
      out = false
    }
    return out
  }

  constructor() { }
}
