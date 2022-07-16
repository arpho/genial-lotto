import { Component, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { configs } from 'src/app/configs/configs';
import { OptionsMaker } from 'src/app/modules/dynamic-form/helpers/optionMaker';
import { DropdownQuestion } from 'src/app/modules/dynamic-form/models/question-dropdown';
import { TextboxQuestion } from 'src/app/modules/dynamic-form/models/question-textbox';

@Component({
  selector: 'app-intervals-page',
  templateUrl: './intervals.page.html',
  styleUrls: ['./intervals.page.scss'],
})
export class IntervalsPage implements OnInit {
  weels = configs.weels
  numero:number
  numberValidator = (control:AbstractControl)=>{
    return !(Number(control.value)&& Number(control.value>0 &&Number(control.value)<=90))?{error:"numero non valido"}:null
  }
showGraph = false

  formFields = [
    new DropdownQuestion({
       label: " ruota ",
        key: "weel",
         options: new OptionsMaker().makesOptionsFromArray(this.weels),
         value:0,
        required:true
       }),
       new TextboxQuestion({
        type:'number',
        key:"number2Check",
        label:"numero in esame",
        required:true,
        validator:this.numberValidator
       })
  ]
  weel: any;

  submit(ev){
    this.weel = configs.weels[ev.weel]
    console.log("submit",ev,this.weel)
    this.numero= ev.number2Check
    this.showGraph= true

  }

  filter(ev){
    console.log("typing",ev)
  }

  constructor() { }

  ngOnInit() {
  }

}
