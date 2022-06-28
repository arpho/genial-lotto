import { AbstractControl, ValidationErrors } from "@angular/forms";
import { ExtractionValidator } from "./extractionValidator";

export function extractionValidator4Field(control:AbstractControl){
  const validator = new ExtractionValidator()
  const extraction = control.value.split(' ').map(e=>{
    return Number(e)
  })
  console.log('validating',control.value)
  const result = validator.isValid(extraction)
  console.log("extraction is valid",result)
  return !result?{notValidExtraction:{value:control.value}}:null

}