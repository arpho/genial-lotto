import { QuestionBase } from '../../dynamic-form/models/question-base';
// tslint:disable-next-line: semicolon
import { QuestionProperties } from '../../dynamic-form/models/questionproperties'

export class TextboxQuestion extends QuestionBase<string> {
    controlType = 'textbox';
    type: string;

    constructor(options: { key: string, label: string } | QuestionProperties<string>) {

        super(options);
        // tslint:disable-next-line: no-string-literal
        this.type = options['type'] || '';
    }
}
