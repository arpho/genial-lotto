import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Extraction } from '../models/extractionModel';
import { OptionsMaker } from '../modules/dynamic-form/helpers/optionMaker';
import { DateQuestion } from '../modules/dynamic-form/models/question-date';
import { DropdownQuestion } from '../modules/dynamic-form/models/question-dropdown';
import { SelectorQuestion } from '../modules/dynamic-form/models/question-selector';
import { DateHelpers } from '../modules/helpers/dateHelper';
import { EstrazioniService } from '../services/extractions/estrazioni.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  showSpinner= true
  weels:string[] = []
  dateEstrazioni:string[]=[]
  formFields:any[]

  constructor(private activatedRoute: ActivatedRoute,public estrazioni:EstrazioniService) { }

  filter(ev){
    console.log("typing",ev)
    const helper = new DateHelpers()
    const data =helper.fromDatePickerFormat2ItalianFormat( ev.extractionDate.split('T')[0])
    console.log(data)
   
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.estrazioni.extractions.subscribe((items)=>{
      this.showSpinner= items.length ==0
      console.log("got items",items.length)
      items.sort((a:Extraction,b:Extraction)=>{
        return a._dateInmsec-b._dateInmsec// ordinamento crescente dal più vecchio al più recente
      }).forEach((e:Extraction)=>{
        this.weels.push(e.weel)
        this.weels =  Array.from( new Set(this.weels))
        this.dateEstrazioni.push(e.date)
        this.dateEstrazioni= Array.from(new Set(this.dateEstrazioni))
      })

      const isDateEnabled = (date:string)=>{
        const helper = new DateHelpers()
        const out = this.dateEstrazioni.indexOf(helper.fromDatePickerFormat2ItalianFormat(date))>-1
        return out
      }
      this.formFields = [new DropdownQuestion({label:"prima ruota ",key:"weel0",options:new OptionsMaker().makeOptionFromArray(this.weels)}),
      new DropdownQuestion({label:"seconda ruota ",key:"weel1",options:new OptionsMaker().makeOptionFromArray(this.weels)}),
      new DateQuestion({key:'extractionDate',label:"data di estrazione",isDateEnabled:isDateEnabled,presentation:"date"})
    ]
    
    })


  }

}
