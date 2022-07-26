import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Figura } from 'src/app/business/figura';
import { Neutro } from 'src/app/business/neutro';
import { Ambate } from 'src/app/models/ambate';
import { Extraction } from 'src/app/models/extractionModel';
import { DateHelpers } from 'src/app/modules/helpers/dateHelper';
import { ApplyFunction2WeelsPageRoutingModule } from '../../modals/apply-function2-weels/apply-function2-weels-routing.module';

@Component({
  selector: 'app-browsing',
  templateUrl: './browsing.page.html',
  styleUrls: ['./browsing.page.scss'],
  //providers:[NavParams]
})
export class BrowsingPage implements OnInit {
  extractionsItems: Extraction[]
  extractionsDate: string[]
  ambata11: number
  ambata12: number
  ambata21: number
  ambata22: number
  echoedNumbers:number[]
  ambate: Ambate
  weel1: string
  weel2: string
  color1 = "red"
  color2 = "orange"
  date: string
  switchViewValue = false
  switchText = "quadro estrazionale"
  transformation = new Neutro()
  constructor(
    public modalCtrl: ModalController,
    public navParams: NavParams) { }

  switchView() {
    console.log("switch")
    this.switchViewValue = !this.switchViewValue
    if (!this.switchViewValue) {
      this.switchText = "quadro estrazionale"
      this.transformation = new Neutro()
    }
    else {
      this.switchText = "figure"
      this.transformation = new Figura()
    }
    console.log("switch", this.switchText, this.switchViewValue)
  }

  fromItalianDate2UsDate(d: string) {
    const transformer = new DateHelpers()
    return transformer.fromItalian2AmericanFormat(d)
  }

  ngOnInit() {
    this.extractionsItems = this.navParams.get("extractions")
    this.date = this.navParams.get("date")
    const crescententSorterItalianDate = (b: string, a: string) => new Date(new DateHelpers().fromItalian2AmericanFormat(b)).getTime() -
      new Date(new DateHelpers().fromItalian2AmericanFormat(a)).getTime()
    if (this.extractionsItems) {
      this.extractionsDate = DateHelpers.getDateListFrom(this.extractionsItems)
      this.extractionsDate = this.extractionsDate.filter(d =>
        new Date(this.fromItalianDate2UsDate(d)).getTime() >
        new Date(this.fromItalianDate2UsDate(this.date)).getTime())
        .sort(crescententSorterItalianDate)
    }

    this.weel1 = this.navParams.get("weel1")
    this.weel2 = this.navParams.get("weel2")
    this.ambata11 = this.navParams.get("ambata11")
    this.ambata12 = this.navParams.get("ambata12")
    this.ambata21 = this.navParams.get("ambata21")
    this.ambata22 = this.navParams.get("ambata22")
    this.extractionsItems = this.navParams.get("extractions")
    this.echoedNumbers = this.navParams.get("echoedNumbers")
    console.log("echoedNumbers",this.echoedNumbers)
    this.ambate = new Ambate({
      weel1: this.weel1,
      weel2: this.weel2,
      ambata11: this.ambata11,
      ambata21: this.ambata21
    })
  }
  dismiss(value?: {}) {
    this.modalCtrl.dismiss(value)
  }

}
