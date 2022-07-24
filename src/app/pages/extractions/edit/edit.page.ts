import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Extraction } from 'src/app/models/extractionModel';
import { TextboxQuestion } from 'src/app/modules/dynamic-form/models/question-textbox';
import { extractionValidator4Field } from 'src/app/business/ExtractioValidator4Field';
import { FetchExtractionNumbers } from 'src/app/business/fetchExtractionNumbers';
import { ExtractionService } from 'src/app/services/extractions/estrazioni.service';
import { MyToastService } from 'src/app/modules/helpers/services/toaster/my-toast-service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
extraction:Extraction
formFields= []
  constructor(private navParams:NavParams,
      private modalCtrl:ModalController,
      public service:ExtractionService,
      private toaster: MyToastService
    ) { }

  ngOnInit() {
    this.extraction = this.navParams.get('item')

    console.log("estrazione",this.extraction)
    this.formFields= [new TextboxQuestion({
      key:"weel",
      label:this.extraction.weel,
      value:this.extraction.extraction.join(' '),
      validator:extractionValidator4Field
    })]
    console.log("form",this.formFields)
  }

  dismiss(value?:{}){
    this.modalCtrl.dismiss(value)
  }

  filter(ev){
    console.log("typing",ev)
  }
  submit(ev){
    console.log("submitting",ev)
    const updatedExtraction = new Extraction(this.extraction)
    updatedExtraction.italianDate= this.extraction.italianDate
    updatedExtraction.setKey(this.extraction.key)
    updatedExtraction.extraction = FetchExtractionNumbers.fetchNumbersFromInputString(ev.weel)
    console.log("submitting",updatedExtraction)
    this.service.updateItem(updatedExtraction).then(()=>{
      this.toaster.presentToast("estrazione modificata regolarmente")
    })
  }

}
