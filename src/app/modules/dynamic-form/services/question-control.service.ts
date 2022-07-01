import { Injectable }   from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { QuestionBase } from '../models/question-base';

@Injectable()
export class QuestionControlService {
  constructor(public fb:FormBuilder) { }

  questionFactory(question:QuestionBase<any>){
    const Question =  new FormControl(question.value||'');
    if(question.required){
      Question.addValidators(Validators.required)
    }
    if(question.validator){
      Question.addValidators(question.validator)

     
    }
    if(question.asyncValidator){
      console.log(question,question.asyncValidator)
     Question.setAsyncValidators(question.asyncValidator)
     Question.updateValueAndValidity()
    }
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
