import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { DateHelpers } from 'src/app/business/dateHelpers';
import { Figura } from 'src/app/business/figura';
import { FiguralMap } from 'src/app/business/figuralMap';
import { MagicCombination } from 'src/app/business/magicCombination';
import { Neutro } from 'src/app/business/neutro';
import { Piu2meno90 } from 'src/app/business/piu2meno90';
import { Vertibile } from 'src/app/business/vertibile';
import { configs } from 'src/app/configs/configs';
import { Extraction } from 'src/app/models/extractionModel';
import { OptionsMaker } from 'src/app/modules/dynamic-form/helpers/optionMaker';
import { DropdownQuestion } from 'src/app/modules/dynamic-form/models/question-dropdown';
import { TextboxQuestion } from 'src/app/modules/dynamic-form/models/question-textbox';
import { BrowsingPageModule } from 'src/app/pages/extractions/browsing/browsing.module';
import { BrowsingPage } from 'src/app/pages/extractions/browsing/browsing.page';
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
  date:string
  message1="primo numero"
  message2= "ambate consigliate"
  showSpinner = true
  color1 = "yellow"
  color2 = "orange"
  weels= configs.weels
  submit(ev){
this.showMagicNumbers=true
     this.date = this.dates[ev.extractionDate]
    this.weel1 = this.weels[ev.weel1]
    this.weel2 = this.weels[ev.weel2]
    let estrazione1 :number[]
    let estrazione2 :number[]
   this.subscription1= this.service.items.subscribe(items=>{
    const Items = items.sort(DateHelpers.sorterDescendingDate)

      estrazione1 = Items
      .filter(extraction=>{
       return extraction.italianDate==this.date && extraction.weel==this.weel1
      })[0]?.extraction
      estrazione2 = Items
      .filter(extraction=>{
        return extraction.italianDate==this.date && extraction.weel==this.weel2
      })[0]?.extraction


if(estrazione1 &&estrazione2){
      const figura1 = this.calculateFigures(estrazione1)
      const figura2 = this.calculateFigures(estrazione2)
      const magic = new MagicCombination(figura1,figura2,ev.combination)
      this.firstMagic = magic.fetch_first()
      this.secondMagic = magic.fetch_second()
      this.firstVertibleMagic = new Vertibile().transform(this.firstMagic)
      this.secondVertibleMagic = new Vertibile().transform(this.secondMagic)
      this.showMagicNumbers= true
    }
    })

  }

  filter(ev){
    console.log("typing",ev)
  }

  calculateFigures(extraction:number[]){
    return extraction.map(i=>new Piu2meno90().transform(i)).map(i=>Math.abs(i)).map(e=>new Figura().transform(e))
  }




  

  constructor(private service: ExtractionService,
              private modalCtrl:ModalController
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
        this.showSpinner= false
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
            value:0,
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

  async browse(){
    const props={
      extractions:this.extractions,
      date:this.date,
      weel1:this.weel1,
      weel2:this.weel2,
      function:new Neutro(),
      ambata11:this.firstMagic,
      ambata12:this.firstVertibleMagic,
      ambata21:this.secondMagic,
      ambata22:this.secondVertibleMagic,
      dateEstrazioni:this.dates,
    }
    console.log("props",props)
    const modal = await this.modalCtrl.create({component:BrowsingPage,
    componentProps:props})
    await modal.present()
  }

}
