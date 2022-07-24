import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DateHelpers } from 'src/app/business/dateHelpers';
import { OptionsMaker } from 'src/app/modules/dynamic-form/helpers/optionMaker';
import { DropdownQuestion } from 'src/app/modules/dynamic-form/models/question-dropdown';
import { ExtractionService } from 'src/app/services/extractions/estrazioni.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.page.html',
  styleUrls: ['./crud.page.scss'],
})
export class CrudPage implements OnInit,OnDestroy {
  formFields =[]
  dates :string[]=[]
  subscriptions:Subscription=Subscription.EMPTY

  constructor(public service:ExtractionService) { }
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe()
  }

  ngOnInit() {
    this.subscriptions.add( this.service.items.subscribe(items=>{
     const Items = items.sort(DateHelpers.sorterDescendingDate);
     this.dates = Array.from(new Set(Items.map(ex => ex.italianDate)))
     console.log("dates",this.dates)
      this.formFields = [new DropdownQuestion({label:"scegli una data",
    key:"date",
    options:new OptionsMaker().makesOptionsFromArray(this.dates)})]
    }))
  }

  setFilter(ev){
    console.log("typing",ev)
  }

}
