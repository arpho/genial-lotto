import { QuestionBase } from '../models/question-base';
import { SelectorProperties } from '../../item/models/selectorItemsProperties';
import { ItemModule } from '../../item/item.module';
import { ItemModelInterface } from '../../item/models/itemModelInterface';
// tslint:disable:semicolon


export class SelectorQuestion extends QuestionBase<ItemModelInterface> {
    controlType = 'itemSelector';
    type: ItemModelInterface;
    constructor(options: SelectorProperties) {
        super(options);
    }
    selectedItem(item: ItemModelInterface) {
    }
}
