import { CheckBoxProperties } from "./checkBoxProperties";
import { QuestionBase } from "./question-base";

export class CheckBoxQuestion extends QuestionBase<Boolean>{
  controlType="checkbox"
  constructor(options:CheckBoxProperties){
    super(options)
  }
}