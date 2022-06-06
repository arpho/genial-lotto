import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
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
  weels:string[] = [
    "Bari",
    "Cagliari",
    "Firenze",
    "Genova",
    "Milano",
    "Napoli",
    "Palermo",
    "Roma",
    "Torino",
    "Venezia",
    "Nazionale"
  ]
  dateEstrazioni:string[]=[]
  formFields:any[]
  ruota1
estrazione1:Extraction
  estrazione2
  ruota2
  estrazioniItems:Extraction[]

  constructor(private activatedRoute: ActivatedRoute,public estrazioni:EstrazioniService) { }

  filter(ev){
    console.log("typing",ev)
    const helper = new DateHelpers()
    const data =this.dateEstrazioni[ev.extractionDate] // separo la data dall'ora

    if(ev.weel1 && ev.extractionDate)
    var estrazione1 = this.estrazioniItems.filter((e:Extraction)=>{
      return e.weel == this.weels[ ev.weel1] && e.italianDate== data
    })
    if(ev.weel2 && ev.extractionDate)
    var estrazione2 = this.estrazioniItems.filter((e:Extraction)=>{
      return e.weel == this.weels[ ev.weel2] && e.italianDate== data
    })
    if(estrazione1){
this.ruota1= estrazione1[0]?.weel
this.estrazione1 =new Extraction({weel:this.ruota1,date:data,extraction:estrazione1[0].extraction})
console.log("estrazione 1",this.estrazione1)
}
if(estrazione2){
this.ruota2= estrazione2[0]?.weel
this.estrazione2 =new Extraction({weel:this.ruota2,date:data,extraction:estrazione2[0].extraction})
}
  
  }
  submit(ev){
    console.log("submitted",ev);
  }

  submit(ev){
    console.log("submitted", ev)
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.estrazioni.extractions.subscribe((items)=>{
      if(items.length==0){
        console.time("subscription")
        console.time("loading")
      }
      else{
        console.timeEnd("subscription")
        console.time("loading")
      }
      this.estrazioniItems = []
      this.showSpinner= items.length ==0
      items.sort((a:Extraction,b:Extraction)=>{
        return a._dateInmsec-b._dateInmsec// ordinamento crescente dal più vecchio al più recente
      }).forEach((e:Extraction)=>{
        // this.weels.push(e.weel)
        this.estrazioniItems = items
        // this.weels =  Array.from( new Set(this.weels))
        this.dateEstrazioni.push(e.italianDate)
        this.dateEstrazioni= Array.from(new Set(this.dateEstrazioni))
      })
      console.timeEnd("loading")
      const isDateEnabled = (date:string)=>{
        const helper = new DateHelpers()
        const out = this.dateEstrazioni.indexOf(helper.fromDatePickerFormat2ItalianFormat(date))>-1
        return out
      }
      this.formFields = [
      new DropdownQuestion({label:"prima ruota ",key:"weel1",options:new OptionsMaker().makeOptionFromArray(this.weels)}),
      new DropdownQuestion({label:"seconda ruota ",key:"weel2",options:new OptionsMaker().makeOptionFromArray(this.weels)}),
      new DropdownQuestion({key:"extractionDate",label:"data di estrazione",options:new OptionsMaker().makeOptionFromArray(this.dateEstrazioni)})
    ]
    
    })


  }

}
