import { Component, Input, OnInit } from '@angular/core';
import { IntervalCalculator } from 'src/app/business/intervalCalculator';
import { Vertibile } from 'src/app/business/vertibile';
import { Extraction } from 'src/app/models/extractionModel';
import { TransformationInterface } from 'src/app/models/trasformationInterface';
import { MessageBrokerService } from 'src/app/modules/helpers/services/messages/message-broker.service';
import * as d3 from "d3"
import { Utilities4Date } from 'src/app/modules/helpers/dateHelper';
import { makeData4D3 } from 'src/app/business/makeData4D3';
import { ModalController } from '@ionic/angular';
import { BrowsingPage } from 'src/app/pages/extractions/browsing/browsing.page';
import { stringify } from 'querystring';
import { Piu2meno90 } from 'src/app/business/piu2meno90';
import { RepetitionsFinder } from 'src/app/business/repetionFinder';
import { Ambate } from 'src/app/models/ambate';
@Component({
  selector: 'app-apply-function2-weels-component',
  templateUrl: './apply-function2-weels.component.html',
  styleUrls: ['./apply-function2-weels.component.scss'],
})
export class ApplyFunction2WeelsComponent implements OnInit {
  @Input() weel1: string
  @Input() date: string
  @Input() weel2: string
  WeelOne: Extraction
  ambata11: number
  ambata12: number
  ambata21: number
  ambata22: number
  ambate:Ambate
  barData
  showsBrowseButton = false
  showAmbate= false
  dateEstrazioni:string[]
  showTitle = false
  color1 = "red"
  color2 = "orange"
  WeelTwo: Extraction
  echoedNumbers:number[]
  echoedNumbersOnWeel1: number[]
  echoedNumbersOnWeel2:number[]
  function: TransformationInterface
  extractions: Extraction[]
  ambate_weel1: string
  repetition4WeelOne:number[]
  repetition4WeelTwo:number[]
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
      echoedNumbers:this.echoedNumbers,
      dateEstrazioni:this.dateEstrazioni,
    }
    const modal = await this.modalCtrl.create({component:BrowsingPage,
      cssClass: 'fullscreen',
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
      this.showTitle= !!data
      if (data) {
        this.showsBrowseButton= true
        this.showTitle = true
        this.extractions=data.extractions
        this.date= data.date
        this.weel1=data.weel1
        this.weel2=data.weel2
        this.dateEstrazioni=data.dateEstrazioni
        this.function= data.function
      this.showAmbate = this.function.title==new Piu2meno90().title
        this.WeelOne = data.extractions.filter((e: Extraction) => {
          return e.weel == data.weel1 && e.italianDate == data.date
        })[0]
        this.WeelTwo = data.extractions.filter((e: Extraction) => {
          return e.weel == data.weel2 && e.italianDate == data.date
        })[0]
        if(data.function.title==new Piu2meno90().title){
          var weelOnePlus2Minus90= this.WeelOne.extraction.map(es=>data.function.transform(es))
          var weelTwoPlus2Minus90= this.WeelTwo.extraction.map(es=>data.function.transform(es))
          const repetitionFinder4weelOne = new RepetitionsFinder(weelOnePlus2Minus90)
          const repetitionFinder4weelTwo = new RepetitionsFinder(weelTwoPlus2Minus90)
          this.repetition4WeelOne = repetitionFinder4weelOne.findRepetitions(weelTwoPlus2Minus90)
          this.repetition4WeelTwo = repetitionFinder4weelTwo.findRepetitions(weelOnePlus2Minus90)
          this.echoedNumbersOnWeel2= repetitionFinder4weelTwo.fetchEchoedNumbers(this.repetition4WeelTwo)
          this.echoedNumbersOnWeel1= repetitionFinder4weelOne.fetchEchoedNumbers(this.repetition4WeelOne)
          this.echoedNumbers=repetitionFinder4weelTwo.reflectArrayAndRemoveDuplicated( [...this.echoedNumbersOnWeel1,... this.echoedNumbersOnWeel2])
        }
        this.title = `${data.function.title} applicata alle ruote di ${data.weel1} e di ${data.weel2} del ${data.date}`
        this.ambata11 = data.function.transform(this.WeelOne.getFirst())
        this.ambata12 = new Vertibile().transform(data.function.transform(this.WeelOne.getFirst()))
        this.ambata21 = data.function.transform(this.WeelTwo.getFirst())
        this.ambata22 = new Vertibile().transform(data.function.transform(this.WeelTwo.getFirst()))
        this.ambate_weel1 = `${data.function.transform(this.WeelOne.getFirst())}-${new Vertibile().transform(data.function.transform(this.WeelOne.getFirst()))}`
        const intervals1= new IntervalCalculator(data.extractions).retrieveInterval(data.weel1,this.ambata11,data.date)
        const makeData = new makeData4D3()
        this.barData= makeData.transform(intervals1).slice(0,20)
        this.ambate = new Ambate({weel1:this.weel1,weel2:this.weel2,ambata11:this.ambata11,ambata21:this.ambata21})
   
      }
    })
  }

}
