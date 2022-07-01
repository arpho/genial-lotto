// tslint:disable: quotemark
import { connectableObservableDescriptor } from "rxjs/internal/observable/ConnectableObservable";
import { DateProperties } from "./dateProperties";
import { QuestionBase } from "./question-base";
import { QuestionProperties } from './questionproperties';
import { AsyncValidatorFn } from "@angular/forms";
export class DateQuestion extends QuestionBase<any> {

  controlType = "datebox";
  type: string;

   isDateEnabled: (date: string) => boolean

   

   

  constructor(options: DateProperties = { key: 'date', label: 'set a date',
  presentation:'date',
 isDateEnabled: (date:string)=>{return true}
}) {
    super(options);
    /*
    // tslint:disable-next-line: no-string-literal
    this.type = options["type"] || ""; */
  }
}
