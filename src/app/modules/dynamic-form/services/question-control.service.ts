import { Injectable }   from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { QuestionBase } from '../models/question-base';

@Injectable()
export class QuestionControlService {
  constructor(public fb:FormBuilder) { }

  questionFactory(question:QuestionBase<any>){
    const Question =  new FormControl(question.value||'');
    const validators = []
    if(question.required){
      validators.push(Validators.required)
    }
    if(question.validator){
      console.log("validator",question.validator)
      validators.push(question.validator)
    }
    Question.setValidators(validators)
    return Question
  }

  toFormGroup(questions: QuestionBase<any>[] ) {
    const group: any = {};

    questions.forEach(question => {
      group[question.key] = this.questionFactory(question) // question.required ? new FormControl(question.value || '', Validators.required)
                                              //: new FormControl(question.value||'');
    });
    return this.fb.group(group);
  }
}
