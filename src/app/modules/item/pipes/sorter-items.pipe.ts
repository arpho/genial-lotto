import { Pipe, PipeTransform } from '@angular/core';
import { ItemModelInterface } from '../models/itemModelInterface';
import { CommonModule } from '@angular/common'

@Pipe({
  name: 'sorterItems'
})
export class SorterItemsPipe implements PipeTransform {

  transform(allItems: any[], args?: any): any {
    return (args && allItems) ? allItems.sort(args) : allItems;
  }

}
