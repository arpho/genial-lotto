import { QuestionBase } from '../../dynamic-form/models/question-base';
import { DropdownProperties } from '../../dynamic-form/models/question-dropdown';

export class DropdownQuestion extends QuestionBase<string> {
    controlType = 'dropdown';
    options: { key: string, value: string }[] = [];

    constructor(options: { key: string, label: string } | DropdownProperties) {
        super(options);
        // tslint:disable-next-line: no-string-literal
        this.options = options['options'] || [];
    }
}
