import { QuestionBase } from "./question-base";
import { QuestionProperties } from './questionproperties';

export interface passwordQuestionProperties extends QuestionProperties<string>{
repeatPassword?:boolean
}
export class PasswordQuestion extends QuestionBase<string>{
    controlType='password'
    type:string
    constructor(options:QuestionProperties<string>){
        super(options)

        console.log('retype',this.retypePassword)
    
    }

}