import { TextboxQuestion } from './question-textbox';
import { QuestionProperties } from './questionproperties';






export interface TextAreaProperties extends QuestionProperties<string>{

    autroGrow?:boolean
}


export class TextAreaBox extends TextboxQuestion{
    constructor(options: TextAreaProperties | { key: string, label: string, type: 'string',autoGrow:boolean }){
        super(options)
        this.controlType = "textArea"
    }
}