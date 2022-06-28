import { Component, OnInit } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ExtractionValidator } from 'src/app/business/extractionValidator';
import { extractionValidator4Field } from 'src/app/business/ExtractioValidator4Field';
import { Extraction } from 'src/app/models/extractionModel';
import { DateQuestion } from 'src/app/modules/dynamic-form/models/question-date';
import { TextboxQuestion } from 'src/app/modules/dynamic-form/models/question-textbox';
import { MyToastService } from 'src/app/modules/helpers/services/toaster/my-toast-service.service';
import { DateModel } from 'src/app/modules/user/models/birthDateModel';

@Component({
  selector: 'app-add-extraction',
  templateUrl: './add-extraction.page.html',
  styleUrls: ['./add-extraction.page.scss'],
})
export class AddExtractionPage implements OnInit {
  formFields: any[]
  extraction = new Extraction()

  filter(ev) {
    console.log("typing", ev)
  }




  ngOnInit() {
    this.formFields = [
      new DateQuestion({
        key: "date",
        label: "data di estrazione",
        required: true,
        presentation:"date",
      }),
      new TextboxQuestion({
        key:"Bari",
        label:"Bari",
        required:true,
        validator:extractionValidator4Field
      }),
      new TextboxQuestion({
        key:"Cagliari",
        label:"Cagliari",
        validator:extractionValidator4Field
      }),
      new TextboxQuestion({
        key:"Firenze",
        label:"Firenze",
        validator:extractionValidator4Field
      }),
      new TextboxQuestion({
        key:"Genova",
        label:"Genova",
        validator:extractionValidator4Field
      }),
      new TextboxQuestion({
        key:"Milano",
        label:"Milano",
        validator:extractionValidator4Field
      }),
      new TextboxQuestion({
        key:"Napoli",
        label:"Napoli",
        validator:extractionValidator4Field
      }),
      new TextboxQuestion({
        key:"Palermo",
        label:"Palermo",
        validator:extractionValidator4Field
      }),
      new TextboxQuestion({
        key:"Roma",
        label:"Roma",
        validator:extractionValidator4Field
      }),
      new TextboxQuestion({
        key:"Torino",
        label:"Torino",
        validator:extractionValidator4Field
      }),
      new TextboxQuestion({
        key:"Venezia",
        label:"Venezia",
        validator:extractionValidator4Field
      }),
      new TextboxQuestion({
        key:"Nazionale",
        label:"Nazionale",
        validator:extractionValidator4Field
      })
    ]
    this.toaster.presentToast("inserire i numeri separati da uno spazio","middle",5000)
  }
  constructor(
    public modalCtrl: ModalController,
    public toaster:MyToastService) { }

  dismiss(v?: any) {
    this.modalCtrl.dismiss(v)
  }


  submit(ev) {
    console.log("submitting", ev)
    new DateModel()
    this.extraction.date = new DateModel(new Date(ev.date)).ItalianFormatDate()
    console.log("extraction",this.extraction)
  }
}
