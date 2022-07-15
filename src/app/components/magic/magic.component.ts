import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DateHelpers } from 'src/app/business/dateHelpers';
import { Extraction } from 'src/app/models/extractionModel';
import { OptionsMaker } from 'src/app/modules/dynamic-form/helpers/optionMaker';
import { DropdownQuestion } from 'src/app/modules/dynamic-form/models/question-dropdown';
import { TextboxQuestion } from 'src/app/modules/dynamic-form/models/question-textbox';
import { ExtractionService } from 'src/app/services/extractions/estrazioni.service';

@Component({
  selector: 'app-magic-component',
  templateUrl: './magic.component.html',
  styleUrls: ['./magic.component.scss'],
})
export class MagicComponent implements OnInit, OnDestroy {
  private extractions: Extraction[]
  private dates: string[]
  private subscription: Subscription
  public formFields:any[]
  weels: string[] = [
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
  submit(ev){
    console.log("submit",ev)
  }

  filter(ev){
    console.log("typing",ev)
  }

  constructor(private service: ExtractionService) { }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  ngOnInit() {
    this.subscription = this.service.items.subscribe((items) => {
      if (items) {
        this.extractions = items.sort(DateHelpers.sorterDescendingDate);
        this.dates = Array.from(new Set(this.extractions.map(ex => ex.italianDate)))

        this.formFields = [
          new DropdownQuestion({
             label: "prima ruota ",
              key: "weel1",
               options: new OptionsMaker().makesOptionsFromArray(this.weels),
               value:1,
              required:true
             }),
          new DropdownQuestion({ label: "seconda ruota ",
           key: "weel2",
           value:2,
            options: new OptionsMaker().makesOptionsFromArray(this.weels),
          required:true
         }),
          new DropdownQuestion({
            key: "extractionDate",
            label: "data di estrazione",
            value:3,
            options: new OptionsMaker().makesOptionsFromArray(this.dates),
            required:true
          }),
          new DropdownQuestion({
            key: "function",
            label: "funzione",
            value:1,
            options: new OptionsMaker().makesOptionsFromArray(["vertibili", "Genial", "figura"]),
            required:true
          }),
          new TextboxQuestion({
            key:"combination",
            label:"combinazione figurale",
            required:true,
          })
        ]
      }
    })

  }

}
