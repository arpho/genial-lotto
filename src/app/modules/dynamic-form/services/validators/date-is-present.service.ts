import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { DateModel } from 'src/app/modules/user/models/birthDateModel';
import { ExtractionService } from 'src/app/services/extractions/estrazioni.service';

@Injectable({
  providedIn: 'root'
})
export class DateIsPresentService {

  constructor(public service: ExtractionService) { }
  dateValidator(): AsyncValidatorFn {
    return async (control: AbstractControl): Promise<ValidationErrors> => {
      console.log("checking dfate",control.value)
      const extractions = await this.service.items.toPromise()
      console.log("date",control.value)
      const isPresent = extractions.filter((e)=>{
        console.log(new DateModel(new Date(e.date)).ItalianFormatDate(),new DateModel(new Date(control.value)).ItalianFormatDate(),
        new DateModel(new Date(e.date)).ItalianFormatDate()==new DateModel(new Date(control.value)).ItalianFormatDate()
        )
        return new DateModel(new Date(e.date)).ItalianFormatDate()==new DateModel(new Date(control.value)).ItalianFormatDate()
      }).length>0
      return isPresent ? { "extractionExists": true } : null


    }
  }
}