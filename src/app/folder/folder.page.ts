import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { Figura } from '../business/figura';
import { Neutro } from '../business/neutro';
import { Piu2meno90 } from '../business/piu2meno90';
import { Vertibile } from '../business/vertibile';
import { Extraction } from '../models/extractionModel';
import { TransformationInterface } from '../models/trasformationInterface';
import { OptionsMaker } from '../modules/dynamic-form/helpers/optionMaker';
import { DateQuestion } from '../modules/dynamic-form/models/question-date';
import { DropdownQuestion } from '../modules/dynamic-form/models/question-dropdown';
import { SelectorQuestion } from '../modules/dynamic-form/models/question-selector';
import { DateHelpers } from '../modules/helpers/dateHelper';
import { MessageBrokerService } from '../modules/helpers/services/messages/message-broker.service';
import { AddExtractionPage } from '../pages/modals/add-extraction/add-extraction.page';
import { ApplyFunction2WeelsPage } from '../pages/modals/apply-function2-weels/apply-function2-weels.page';
import { ExtractionService } from '../services/extractions/estrazioni.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  selectedFunction: TransformationInterface
  showSpinner = true
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
  dateEstrazioni: string[] = []
  formFields: any[]
  ruota1
  estrazione1: Extraction
  estrazione2: Extraction
  trasformazione2: Extraction
  trasformazione1: Extraction
  ruota2
  estrazioniItems: Extraction[]
  selectedData: string
  selectedData1: string
  selectedData2: string
  selectedData3: string
  selectedData4: string
  selectedData5: string
  neutralFunction = new Neutro()
  step = 0
  index = 0
  appliedFunction = ""
  constructor(
    private activatedRoute: ActivatedRoute,
    public estrazioni: ExtractionService,
    public modalCtrl: ModalController,
    public messages: MessageBrokerService) {
    messages.subscribeTo("selectedFunction", (transformation: TransformationInterface) => {
      this.selectedFunction = transformation
      this.appliedFunction = ` funzione applicata: ${transformation.title}`
    })
  }

  setStepDates(startFrom: number, step: number) {
    if (startFrom + step + 1 <= this.dateEstrazioni.length && startFrom + step >= 0) {
      this.selectedData3 = this.dateEstrazioni[startFrom + step]
      this.selectedData4 = this.dateEstrazioni[startFrom + step + 1]
      this.selectedData5 = this.dateEstrazioni[startFrom + step + 2]
    }

  }

  previous() {
    this.step -= 1
    console.log("prev", this.step)
    this.setStepDates(this.index, this.step)
  }
  next() {
    this.step += 1
    console.log("next", this.step)
    this.setStepDates(this.index, this.step)
  }

  filter(ev) {
    console.log("typing", ev)
    this.index = Number(ev.extractionDate) // we set the index of the combobox
    const data = this.dateEstrazioni[ev.extractionDate]

    this.selectedData = data
    this.selectedData1 = this.dateEstrazioni[Number(ev.extractionDate) + 1]
    this.selectedData2 = this.dateEstrazioni[Number(ev.extractionDate) + 2]
    this.setStepDates(this.index, this.step)
    if (ev.weel1 && ev.extractionDate)
      var estrazione1 = this.estrazioniItems.filter((e: Extraction) => {
        return e.weel == this.weels[ev.weel1] && e.italianDate == data
      })
    if (ev.weel2 && ev.extractionDate)
      var estrazione2 = this.estrazioniItems.filter((e: Extraction) => {
        return e.weel == this.weels[ev.weel2] && e.italianDate == data
      })
    if (estrazione1) {
      this.ruota1 = estrazione1[0]?.weel
      this.estrazione1 = new Extraction({ weel: this.ruota1, date: data, extraction: estrazione1[0].extraction })
    }
    if (estrazione2) {
      this.ruota2 = estrazione2[0]?.weel
      this.estrazione2 = new Extraction({ weel: this.ruota2, date: data, extraction: estrazione2[0].extraction })
    }

  }
  async submit(ev) {
    console.log("submitted", ev);
    console.log("funzione", this.selectedFunction)
    /*   if (this.estrazione1) {
        this.trasformazione1 = new Extraction(this.estrazione1.apply(this.selectedFunction))
        console.log("trasformazione1", this.trasformazione1)
      }
      if (this.estrazione2) {
        this.trasformazione2 = new Extraction(this.estrazione2.apply(this.selectedFunction))
      } */

    const functionList = [new Vertibile(), new Piu2meno90(), new Figura()]
    const props =  {
      weel1: this.weels[ ev.weel1],
      weel2: this.weels[ ev.weel2],
      function: functionList[Number(ev.function)],
      date: this.dateEstrazioni[Number(ev.extractionDate)],
      extractions:this.estrazioniItems
    }
    const modal = await this.modalCtrl.create({
      component: ApplyFunction2WeelsPage, componentProps: props
    })
    await modal.present()
  }

  transformation: TransformationInterface

 async addExtraction(){
    console.log("add")
    const modal =await this.modalCtrl.create({
      component:AddExtractionPage
    })
    await modal.present()
  }

  ngOnInit() {
    this.messages.subscribeTo("selectedFunction", (transformation: TransformationInterface) => { // we get the selected transformation
      transformation = transformation
    })
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.estrazioni.items.subscribe((items) => {
  
      this.estrazioniItems = []
      this.showSpinner = items.length == 0
      items.sort((a: Extraction, b: Extraction) => {
        return a._dateInmsec - b._dateInmsec// ordinamento crescente dal più vecchio al più recente
      }).forEach((e: Extraction) => {
        // this.weels.push(e.weel)
        this.estrazioniItems = items
        // this.weels =  Array.from( new Set(this.weels))
        this.dateEstrazioni.push(e.italianDate)
        this.dateEstrazioni = Array.from(new Set(this.dateEstrazioni))
      })
      const isDateEnabled = (date: string) => {
        const helper = new DateHelpers()
        const out = this.dateEstrazioni.indexOf(helper.fromDatePickerFormat2ItalianFormat(date)) > -1
        return out
      }
      this.formFields = [
        new DropdownQuestion({
           label: "prima ruota ",
            key: "weel1",
             options: new OptionsMaker().makesOptionsFromArray(this.weels),
            required:true
           }),
        new DropdownQuestion({ label: "seconda ruota ",
         key: "weel2",
          options: new OptionsMaker().makesOptionsFromArray(this.weels),
        required:true
       }),
        new DropdownQuestion({
          key: "extractionDate",
          label: "data di estrazione",
          options: new OptionsMaker().makesOptionsFromArray(this.dateEstrazioni),
          required:true
        }),
        new DropdownQuestion({
          key: "function",
          label: "funzione",
          options: new OptionsMaker().makesOptionsFromArray(["vertibili", "+2-90", "figura"]),
          required:true
        })
      ]

    })


  }

}
