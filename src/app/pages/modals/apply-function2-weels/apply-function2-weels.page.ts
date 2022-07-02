import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Vertibile } from 'src/app/business/vertibile';
import { Extraction } from 'src/app/models/extractionModel';
import { TransformationInterface } from 'src/app/models/trasformationInterface';

@Component({
  selector: 'app-apply-function2-weels',
  templateUrl: './apply-function2-weels.page.html',
  styleUrls: ['./apply-function2-weels.page.scss'],
})
export class ApplyFunction2WeelsPage implements OnInit {
  weel1: String
  date: string
  weel2: String
  WeelOne: Extraction
  ambata11: number
  ambata12: number
  ambata21: number
  ambata22: number
  color1="red"
  color2="orange"
  WeelTwo: Extraction
  function: TransformationInterface
  extractions: Extraction[]
  ambate_weel1: string
  title: string
  constructor(
    public navParams: NavParams,
    public modalCtrl: ModalController
  ) { }

  dismiss() {
    this.modalCtrl.dismiss()
  }

  ngOnInit() {
    this.weel1 = this.navParams.get("weel1")
    this.weel2 = this.navParams.get("weel2")
    this.date = this.navParams.get("date")
    this.function = this.navParams.get("function")
    this.extractions = this.navParams.get("extractions")
    this.WeelOne = this.extractions.filter((e: Extraction) => {
      return e.weel == this.weel1 && e.italianDate == this.date
    })[0]
    this.WeelTwo = this.extractions.filter((e: Extraction) => {
      return e.weel == this.weel2 && e.italianDate == this.date
    })[0]
    this.title = `${this.function.title} applicata alle ruote di ${this.weel1} e di ${this.weel2} del ${this.date}`

    this.ambata11 = this.function.transform(this.WeelOne.getFirst())
    this.ambata12 = new Vertibile().transform(this.function.transform(this.WeelOne.getFirst()))
    this.ambata21 = this.function.transform(this.WeelTwo.getFirst())
    this.ambata22 = new Vertibile().transform(this.function.transform(this.WeelTwo.getFirst()))
    this.ambate_weel1 = `${this.function.transform(this.WeelOne.getFirst())}-${new Vertibile().transform(this.function.transform(this.WeelOne.getFirst()))}`
    console.log(this.ambate_weel1)
  }

}
