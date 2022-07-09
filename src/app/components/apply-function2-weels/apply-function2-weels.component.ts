import { Component, Input, OnInit } from '@angular/core';
import { IntervalCalculator } from 'src/app/business/intervalCalculator';
import { Vertibile } from 'src/app/business/vertibile';
import { Extraction } from 'src/app/models/extractionModel';
import { TransformationInterface } from 'src/app/models/trasformationInterface';
import { MessageBrokerService } from 'src/app/modules/helpers/services/messages/message-broker.service';
import * as d3 from "d3"
import { DateHelpers } from 'src/app/modules/helpers/dateHelper';
import { makeData4D3 } from 'src/app/business/makeData4D3';
import { ModalController } from '@ionic/angular';
import { BrowsingPage } from 'src/app/pages/extractions/browsing/browsing.page';
import { stringify } from 'querystring';
@Component({
  selector: 'app-apply-function2-weels-component',
  templateUrl: './apply-function2-weels.component.html',
  styleUrls: ['./apply-function2-weels.component.scss'],
})
export class ApplyFunction2WeelsComponent implements OnInit {
  @Input() weel1: String
  @Input() date: string
  @Input() weel2: String
  WeelOne: Extraction
  ambata11: number
  ambata12: number
  ambata21: number
  ambata22: number
  barData
  dateEstrazioni:string[]
  show = false
  color1 = "red"
  color2 = "orange"
  WeelTwo: Extraction
  function: TransformationInterface
  extractions: Extraction[]
  ambate_weel1: string
  title: string ="ciao"
  constructor(
    public messages: MessageBrokerService,
    public modalCtrl: ModalController
  ) { }

  async browse(){
    const props={
      extractions:this.extractions,
      date:this.date,
      weel1:this.weel1,
      weel2:this.weel2,
      ambata11:this.ambata11,
      ambata12:this.ambata12,
      ambata21:this.ambata21,
      ambata22:this.ambata22,
      dateEstrazioni:this.dateEstrazioni,
    }
    console.log("props",props)
    const modal = await this.modalCtrl.create({component:BrowsingPage,
    componentProps:props})
    await modal.present()
  }


  ngOnInit() {
    this.messages.subscribeTo("ambate", (data: {
      weel1: string,
      weel2: string,
      date: string,
      function: TransformationInterface,
      dateEstrazioni:string[]
      extractions: Extraction[]

    }) => {
      if (data) {
        this.show = true
        this.extractions=data.extractions
        this.date= data.date
        this.weel1=data.weel1
        this.weel2=data.weel2
        this.dateEstrazioni=data.dateEstrazioni
        this.function= data.function
        this.WeelOne = data.extractions.filter((e: Extraction) => {
          return e.weel == data.weel1 && e.italianDate == data.date
        })[0]
        this.WeelTwo = data.extractions.filter((e: Extraction) => {
          return e.weel == data.weel2 && e.italianDate == data.date
        })[0]
        this.title = `${data.function.title} applicata alle ruote di ${data.weel1} e di ${data.weel2} del ${data.date}`
        this.ambata11 = data.function.transform(this.WeelOne.getFirst())
        this.ambata12 = new Vertibile().transform(data.function.transform(this.WeelOne.getFirst()))
        this.ambata21 = data.function.transform(this.WeelTwo.getFirst())
        this.ambata22 = new Vertibile().transform(data.function.transform(this.WeelTwo.getFirst()))
        this.ambate_weel1 = `${data.function.transform(this.WeelOne.getFirst())}-${new Vertibile().transform(data.function.transform(this.WeelOne.getFirst()))}`
        const intervals1= new IntervalCalculator(data.extractions).retrieveInterval(data.weel1,this.ambata11,data.date)
        const makeData = new makeData4D3()
        this.barData= makeData.transform(intervals1).slice(0,20)
   
      }
    })
  }

}
