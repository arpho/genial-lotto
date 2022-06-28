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
        label:"Cagliari"
      }),
      new TextboxQuestion({
        key:"Firenze",
        label:"Firenze"
      }),
      new TextboxQuestion({
        key:"Genova",
        label:"Genova"
      }),
      new TextboxQuestion({
        key:"Milano",
        label:"Milano"
      }),
      new TextboxQuestion({
        key:"Napoli",
        label:"Napoli"
      }),
      new TextboxQuestion({
        key:"Palermo",
        label:"Palermo"
      }),
      new TextboxQuestion({
        key:"Roma",
        label:"Roma"
      }),
      new TextboxQuestion({
        key:"Torino",
        label:"Torino"
      }),
      new TextboxQuestion({
        key:"Venezia",
        label:"Venezia"
      }),
      new TextboxQuestion({
        key:"Nazionale",
        label:"Nazionale"
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
