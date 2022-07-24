import { Component, OnInit } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { asyncDateValidatorFactory } from 'src/app/business/asyncDateValidatorFactory';
import { ExtractionValidator } from 'src/app/business/extractionValidator';
import { extractionValidator4Field } from 'src/app/business/ExtractioValidator4Field';
import { FetchExtractionNumbers } from 'src/app/business/fetchExtractionNumbers';
import { Extraction } from 'src/app/models/extractionModel';
import { DateQuestion } from 'src/app/modules/dynamic-form/models/question-date';
import { TextboxQuestion } from 'src/app/modules/dynamic-form/models/question-textbox';
import { MyToastService } from 'src/app/modules/helpers/services/toaster/my-toast-service.service';
import { DateModel } from 'src/app/modules/user/models/birthDateModel';
import { ExtractionService } from 'src/app/services/extractions/estrazioni.service';

@Component({
  selector: 'app-add-extraction',
  templateUrl: './add-extraction.page.html',
  styleUrls: ['./add-extraction.page.scss'],
})
export class AddExtractionPage implements OnInit {
  formFields: any[]
  Bari = new Extraction()
  Cagliari = new Extraction()
  Firenze = new Extraction()
  Genova = new Extraction()
  Milano = new Extraction()
  Napoli = new Extraction()
  Palermo = new Extraction()
  Roma = new Extraction()
  Torino = new Extraction()
  Venezia = new Extraction()
  Nazionale = new Extraction()

  filter(ev) {
    console.log("typing", ev)
  }




  ngOnInit() {
    this.formFields = [
      new DateQuestion({
        key: "date",
        label: "data di estrazione",
        required: true,
        presentation: "date",
        asyncValidator:[new asyncDateValidatorFactory(this.service).getValidator()]
      
      }),
      new TextboxQuestion({
        key: "Bari",
        label: "Bari",
        required: true,
        validator: extractionValidator4Field
      }),
      new TextboxQuestion({
        key: "Cagliari",
        label: "Cagliari",
        validator: extractionValidator4Field
      }),
      new TextboxQuestion({
        key: "Firenze",
        label: "Firenze",
        validator: extractionValidator4Field
      }),
      new TextboxQuestion({
        key: "Genova",
        label: "Genova",
        validator: extractionValidator4Field
      }),
      new TextboxQuestion({
        key: "Milano",
        label: "Milano",
        validator: extractionValidator4Field
      }),
      new TextboxQuestion({
        key: "Napoli",
        label: "Napoli",
        validator: extractionValidator4Field
      }),
      new TextboxQuestion({
        key: "Palermo",
        label: "Palermo",
        validator: extractionValidator4Field
      }),
      new TextboxQuestion({
        key: "Roma",
        label: "Roma",
        validator: extractionValidator4Field
      }),
      new TextboxQuestion({
        key: "Torino",
        label: "Torino",
        validator: extractionValidator4Field
      }),
      new TextboxQuestion({
        key: "Venezia",
        label: "Venezia",
        validator: extractionValidator4Field
      }),
      new TextboxQuestion({
        key: "Nazionale",
        label: "Nazionale",
        validator: extractionValidator4Field
      })
    ]
    this.toaster.presentToast("inserire i numeri separati da uno spazio", "middle", 5000)
  }
  constructor(
    public modalCtrl: ModalController,
    public toaster: MyToastService,
    public service: ExtractionService,
  ) { }

  dismiss(v?: any) {
    this.modalCtrl.dismiss(v)
  }
  fetchExtraction(weel: string, data: {}) {
    const extraction = new Extraction()
    extraction.weel = weel
    extraction.extraction = FetchExtractionNumbers.fetchNumbersFromInputString(data[weel])
    extraction.date = new DateModel(new Date(data['date'])).ItalianFormatDate()
    return extraction
  }

  async submit(ev) {
    console.log("submitting", ev)
    this.Bari = this.fetchExtraction("Bari", ev)
    this.Cagliari = this.fetchExtraction("Cagliari", ev)
    this.Firenze = this.fetchExtraction("Firenze", ev)
    this.Genova = this.fetchExtraction("Genova", ev)
    this.Milano = this.fetchExtraction("Milano", ev)
    this.Napoli = this.fetchExtraction("Napoli", ev)
    this.Roma = this.fetchExtraction("Roma", ev)
    this.Palermo = this.fetchExtraction("Palermo", ev)
    this.Torino = this.fetchExtraction("Torino", ev)
    this.Venezia = this.fetchExtraction("Venezia", ev)
    this.Nazionale = this.fetchExtraction("Nazionale", ev)



    try {
      await this.service.createItem(this.Bari)
      await this.toaster.presentToast("ruota di Bari inserita", "top")
      await this.service.createItem(this.Cagliari)
      await this.toaster.presentToast("ruota di Cagliari inserita", "middle")
      await this.service.createItem(this.Firenze)
      await this.toaster.presentToast("ruota di Firenze inserita", "bottom")
      await this.service.createItem(this.Genova)
      await this.toaster.presentToast("ruota di Genova inserita", "top")
      await this.service.createItem(this.Milano)
      await this.toaster.presentToast("ruota di Milano inserita", "middle")
      await this.service.createItem(this.Napoli)
      await this.toaster.presentToast("ruota di Napoli inserita", "bottom")
      await this.service.createItem(this.Palermo)
      await this.toaster.presentToast("ruota di Palermo inserita", "middle")
      await this.service.createItem(this.Roma)
      await this.toaster.presentToast("ruota di Roma inserita", "top")
      await this.service.createItem(this.Torino)
      await this.toaster.presentToast("ruota di Torino inserita", "middle")
      await this.service.createItem(this.Venezia)
      await this.toaster.presentToast("ruota di Venezia inserita", "bottom")
      await this.service.createItem(this.Nazionale)
      await this.toaster.presentToast("ruota Nazionale inserita", "top")
      this.dismiss()
    }
    catch (error) {
      console.error(error)
      await this.toaster.presentToast("ho riscontrato degli errori")
      this.dismiss()
    }
  }
}
