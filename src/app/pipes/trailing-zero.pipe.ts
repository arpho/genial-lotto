import { Pipe, PipeTransform } from '@angular/core';
import { Figura } from '../business/figura';
import { Piu2meno90 } from '../business/piu2meno90';
import { Value } from '../modules/item/models/value';

@Pipe({
  name: 'trailingZero'
})
export class TrailingZeroPipe implements PipeTransform {
  trailingZero(value){
    var out = value>9?value:`0${value}`
    if(Number(value)==-1){
      out = "1(89)"
    }
    return out
  }

  neutral(value){
    return value
  }
  transform(value: unknown, ...args: unknown[]): unknown {
    let apply = this.trailingZero
    if(args[0] && args[0]['title']==new Figura().title){
      apply =this.neutral
    }

return  apply(value)
  }

}
