import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DateHelpers } from 'src/app/business/dateHelpers';
import { Figura } from 'src/app/business/figura';
import { FiguralMap } from 'src/app/business/figuralMap';
import { MagicCombination } from 'src/app/business/magicCombination';
import { Piu2meno90 } from 'src/app/business/piu2meno90';
import { Vertibile } from 'src/app/business/vertibile';
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
  public formFields:any[]
  firstMagic:number
  firstVertibleMagic:number
  secondVertibleMagic:number
  showMagicNumbers= false
  secondMagic:number
  subscription1
  subscription2
  weel1:string
  weel2:string
  color1 = "yellow"
  color2 = "orange"
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
    console.log("map",FiguralMap.fetchMap(ev.combination))
    const date = this.dates[ev.extractionDate]
    this.weel1 = this.weels[ev.weel1]
    this.weel2 = this.weels[ev.weel2]
    let estrazione1 :number[]
    let estrazione2 :number[]
   this.subscription1= this.service.items.subscribe(items=>{

      estrazione1 = items
      .filter(extraction=>{
        extraction.italianDate==date && extraction.weel==this.weel1
      })[0].extraction
      estrazione2 = items
      .filter(extraction=>{
        extraction.italianDate==date && extraction.weel==this.weel2
      })[0].extraction

      const figura1 = this.calculateFigures(estrazione1)
      const figura2 = this.calculateFigures(estrazione2)
      const magic = new MagicCombination(figura1,figura2,ev.combination)
      this.firstMagic = magic.fetch_first()
      this.secondMagic = magic.fetch_second()
      this.firstVertibleMagic = new Vertibile().transform(this.firstMagic)
      this.secondVertibleMagic = new Vertibile().transform(this.secondMagic)
    })

  }

  filter(ev){
    console.log("typing",ev)
  }

  calculateFigures(extraction:number[]){
    return extraction.map(i=>new Piu2meno90().transform(i)).map(e=>new Figura().transform(e))
  }




  demo(){
    this.weel1="Bari"
    this.weel2="Cagliari"
    const estrazione1 = [27,38,71,15,84]
    const estrazione2 =[68,28,19,22,76]
    const figura1 = estrazione1.map(i=>new Piu2meno90().transform(i)).map(e=>new Figura().transform(e))
    const figura2 = estrazione2.map(i=>new Piu2meno90().transform(i)).map(e=>new Figura().transform(e))
    const figuralMap= "16.90.23"
    const magic = new MagicCombination(figura1,figura2,figuralMap)
    this.firstMagic = magic.fetch_first()
    this.secondMagic = magic.fetch_second()
    this.firstVertibleMagic = new Vertibile().transform(this.firstMagic)
    this.secondVertibleMagic = new Vertibile().transform(this.secondMagic)
    this.showMagicNumbers=true
  

  }

  constructor(private service: ExtractionService,
    ) { }
  ngOnDestroy(): void {
  if(this.subscription1){
    this.subscription1.unsubscribe()
  }
  if(this.subscription2){
    this.subscription2.unsubscribe()
  }
  }

  ngOnInit() {
   this.subscription2 =this.service.items.subscribe((items) => {
      if (items) {
        this.extractions = items.sort(DateHelpers.sorterDescendingDate);
        this.dates = Array.from(new Set(this.extractions.map(ex => ex.italianDate)))
        const  figuralMapValidator = (control:AbstractControl)=>{
          return !FiguralMap.isValid(control.value)?{figuralMap:"not valid"}:null
        }

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
          new TextboxQuestion({
            key:"combination",
            label:"combinazione figurale",
            required:true,
            validator:figuralMapValidator
          })
        ]
      }
    })
   

  }

}
