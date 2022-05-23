import { QuestionBase } from './question-base';
import { QuestionProperties } from './questionproperties';
export class EmailQuestion extends QuestionBase<string>{
    controlType = 'email'
    type:string;
    constructor(options:QuestionProperties<string>){
        super(options)
    }
}