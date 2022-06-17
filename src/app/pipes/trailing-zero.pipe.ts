import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trailingZero'
})
export class TrailingZeroPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value>9?value:`0${value}`
  }

}
