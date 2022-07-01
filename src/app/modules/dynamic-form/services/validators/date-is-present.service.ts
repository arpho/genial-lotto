import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { DateModel } from 'src/app/modules/user/models/birthDateModel';
import { ExtractionService } from 'src/app/services/extractions/estrazioni.service';
import * as rxjs from 'rxjs';
import { Extraction } from 'src/app/models/extractionModel';
@Injectable({
  providedIn: 'root'
})
export class DateIsPresentService {

  constructor(public service: ExtractionService) { }
  dateValidator(): AsyncValidatorFn {
    return async (control: AbstractControl): Promise<ValidationErrors> => {
      console.log("checking dfate", control.value)
      this.service.items.subscribe(items => {
        console.log("extraction", items)
      })
      var Extractions: Extraction[]
      const success = (extractions: Extraction[]) => {
        Extractions = extractions
      }

      const reject=()=>{}
      const mypromise = new Promise((success,reject)=>{
        this.service.items.subscribe(success)
      })
      const items = await mypromise

      const isPresent = Extractions.filter((e) => {
        const itemDate = new DateModel(new Date(e.date)).ItalianFormatDate()
        const controlDate = new DateModel(new Date(control.value)).ItalianFormatDate()
        console.log(itemDate, controlDate,
          itemDate == controlDate
        )
        return itemDate == controlDate
      }).length > 0
      return isPresent ? { "extractionExists": true } : null


    }
  }
}