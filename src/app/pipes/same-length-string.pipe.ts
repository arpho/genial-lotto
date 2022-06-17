import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sameLengthString'
})
export class SameLengthStringPipe implements PipeTransform {

  transform(value: string,length:number, ...args: unknown[]): unknown {
    var out = ""
    for (let i =0;i+value.length<=length;i++){
      out= out +'_'
  }
  return value + out

}
}
