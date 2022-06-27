import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { Extraction } from 'src/app/models/extractionModel';
import { TransformationInterface } from 'src/app/models/trasformationInterface';

@Component({
  selector: 'app-apply-function2-weels',
  templateUrl: './apply-function2-weels.page.html',
  styleUrls: ['./apply-function2-weels.page.scss'],
})
export class ApplyFunction2WeelsPage implements OnInit {
weel1:String
date:string
weel2:String
WeelOne:Extraction
WeelTwo:Extraction
function:TransformationInterface
extractions:Extraction[]
  constructor(public navParams:NavParams) { }

  ngOnInit() {
    this.weel1= this.navParams.get("weel1")
    this.weel2= this.navParams.get("weel2")
    this.date= this.navParams.get("date")
    this.function= this.navParams.get("function")
    this.extractions= this.navParams.get("extractions")
    this.WeelOne =   this.extractions.filter((e: Extraction) => {
      return e.weel == this.weel1 && e.italianDate == this.date
    })[0]
    this.WeelTwo =   this.extractions.filter((e: Extraction) => {
      return e.weel == this.weel2 && e.italianDate == this.date
    })[0]

  }

}
