import { QuestionBase } from '../../dynamic-form/models/question-base';
import { QuestionProperties } from '../../dynamic-form/models/questionproperties';
// tslint:disable:semicolon
export interface SwitchProperties extends QuestionProperties<boolean> {
  labelTrue?: string
  labelFalse?: string
  iconTrue?: string
  iconFalse?: string
  options: any[]
}

export class SwitchQuestion<T> extends QuestionBase<boolean> {
  controlType = 'switchBox';
  labelTrue: string;
  labelFalse: string;
  iconTrue: string;
  iconFalse: string;
  type: string;

  constructor(options: { key: string, label: string } | SwitchProperties) {
    super(options);
    // tslint:disable: no-string-literal
    this.labelFalse = options['labelFalse'] || '';
    this.labelTrue = options['labelTrue'] || '';
    this.iconTrue = options['iconTrue'] || 'radio-button-off';
    this.iconFalse = options['iconFalse'] || 'checkmark';
    this.type = options['type'] || 'boolean';
  }
  textValue() {
    return this.value ? this.labelTrue : this.labelFalse;
  }
}
