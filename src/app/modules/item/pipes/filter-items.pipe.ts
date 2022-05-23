import { Pipe, PipeTransform } from '@angular/core';
import { ItemModelInterface } from '../models/itemModelInterface';
import {CommonModule} from "@angular/common"

@Pipe({
  name: 'filterItems'
})
export class FilterItemsPipe implements PipeTransform {

  transform(allItems: ItemModelInterface[], args?: any): any {
    return (args && allItems) ? allItems.filter(args) : allItems;
  }

}
