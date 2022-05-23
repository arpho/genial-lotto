// tslint:disable: quotemark
import { DateProperties } from "./dateProperties";
import { QuestionBase } from "./question-base";
import { QuestionProperties } from './questionproperties';

export class DateQuestion extends QuestionBase<any> {

  controlType = "datebox";
  type: string;

  constructor(options: DateProperties = { key: 'date', label: 'set a date',presentation:'date' }) {
    super(options);
    /*
    // tslint:disable-next-line: no-string-literal
    this.type = options["type"] || ""; */
  }
}
