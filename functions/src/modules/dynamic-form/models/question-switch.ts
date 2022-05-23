
// tslint:disable: quotemark
// tslint:disable: no-string-literal
import { QuestionBase } from "./question-base";
import { QuestionProperties } from './questionproperties';

export interface SwitchQuestionProperties extends QuestionProperties<boolean> {
  labelTrue?: string;
  labelFalse?: string;
  iconTrue?: string;
  iconFalse?: string;

}

export class SwitchQuestion<T> extends QuestionBase<boolean> {
  controlType = "switchBox";
  labelTrue: string;
  labelFalse: string;
  iconFalse: string;
  iconTrue: string;
  type: string;

  constructor(options: SwitchQuestionProperties = { key: 'switch', label: 'make your choice' }) {
    super(options);
    this.labelFalse = options["labelFalse"] || "";
    this.labelTrue = options["labelTrue"] || "";
    this.type = options["type"] || "boolean";
    this.iconFalse = options["iconFalse"] || "";
    this.iconTrue = options["iconTrue"] || "";
  }
  textValue() {
    return this.value ? this.labelTrue : this.labelFalse;
  }
}
