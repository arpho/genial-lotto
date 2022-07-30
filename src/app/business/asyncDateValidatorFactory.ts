import { AbstractControl } from "@angular/forms";
import { Extraction } from "../models/extractionModel";
import { ExtractionService } from "../services/extractions/estrazioni.service";
import { last, map } from 'rxjs/operators';
import { Utilities4Date } from "../modules/helpers/dateHelper";

export class asyncDateValidatorFactory{

  constructor(private service:ExtractionService){}
  getValidator(){
    console.log("ciao async")
    return async (control:AbstractControl)=>{
      console.log("checking",control.value)

      const converter= new Utilities4Date()
      
   const date2Check = converter.fromDatePickerFormat2ItalianFormat(control.value.split('T')[0])
    var result = false
    this.service.items.subscribe(extractions=>{
      extractions.forEach(ex=>{
        result = result || ex.italianDate==date2Check
      })
    })
    return result?{'dateisPresent':true}:null
    }
  }
}
