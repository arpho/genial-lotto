import { QuestionBase } from "./question-base";
import { QuestionProperties } from "./questionproperties";

export interface passwordProperties extends QuestionProperties<string>{
    repeatPassword: boolean
}

export class PasswordQuestion extends QuestionBase<string>{
    controlType = "password"
    type:string
    constructor(options:PasswordQuestion){
        super(options)
    }
}