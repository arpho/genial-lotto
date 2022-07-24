import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DateHelpers } from 'src/app/business/dateHelpers';
import { Extraction } from 'src/app/models/extractionModel';
import { OptionsMaker } from 'src/app/modules/dynamic-form/helpers/optionMaker';
import { DropdownQuestion } from 'src/app/modules/dynamic-form/models/question-dropdown';
import { ItemModelInterface } from 'src/app/modules/item/models/itemModelInterface';
import { DateModel } from 'src/app/modules/user/models/birthDateModel';
import { ExtractionService } from 'src/app/services/extractions/estrazioni.service';
import { AddExtractionPage } from '../../modals/add-extraction/add-extraction.page';
import { EditPage } from '../edit/edit.page';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.page.html',
  styleUrls: ['./crud.page.scss'],
})
export class CrudPage implements OnInit,OnDestroy {
  formFields =[]
  dates :string[]=[]
  hideSubmitButton= true
  subscriptions:Subscription=Subscription.EMPTY
  today = new DateModel(new Date()).ItalianFormatDate()
  createModalPage = AddExtractionPage
  editModalPage = EditPage
  filterFunction=(item:Extraction)=>item.italianDate== this.today

  constructor(public service:ExtractionService) { }
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe()
  }

  ngOnInit() {
    this.subscriptions.add( this.service.items.subscribe(items=>{
      
     const Items = items.sort(DateHelpers.sorterDescendingDate);
     this.dates = Array.from(new Set(Items.map(ex => ex._italianDate)))
      console.log("dates",this.dates)
      this.formFields = [new DropdownQuestion({label:"scegli una data",
    key:"date",
    options:new OptionsMaker().makesOptionsFromArray(this.dates)})]
    }))
  }

  setFilter(ev){
    console.log("typing",ev)
    const selectedDate= this.dates[ev.date]
    console.log("selected",selectedDate)
    this.filterFunction = (item:Extraction)=> item.italianDate == selectedDate
  }

}
