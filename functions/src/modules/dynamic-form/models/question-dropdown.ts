import { QuestionBase } from './question-base';
import { QuestionProperties } from './questionproperties';
import { ComboValue } from './ComboValueinterface';
// tslint:disable:semicolon
export interface DropdownProperties extends QuestionProperties<ComboValue[]> {
    options: ComboValue[]
}

export class DropdownQuestion extends QuestionBase<any> {
    controlType = 'dropdown';
    options: { key: string, value: string }[] = [];

    constructor(options: DropdownProperties | { key: string, label: string }) {
        super(options);
        // tslint:disable-next-line: no-string-literal
        this.options = options['options'] || [];
    }
}
