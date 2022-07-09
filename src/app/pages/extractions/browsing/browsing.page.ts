import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Ambate } from 'src/app/models/ambate';
import { Extraction } from 'src/app/models/extractionModel';

@Component({
  selector: 'app-browsing',
  templateUrl: './browsing.page.html',
  styleUrls: ['./browsing.page.scss'],
})
export class BrowsingPage implements OnInit {
extractionsItems:Extraction[]
dateEstrazioni:string[]
ambata11:number
ambata12:number
ambata21:number
ambata22:number
ambate:Ambate
weel1:string
weel2:string
color1 = "red"
color2 = "orange"
date:string
  constructor(
    public modalCtrl:ModalController,
    public navParams:NavParams) { }

  ngOnInit() {
    this.extractionsItems= this.navParams.get("extractions")
    this.date= this.navParams.get("date")
    this.dateEstrazioni= this.dateEstrazioni
    this.weel1= this.navParams.get("weel1")
    this.weel2 = this.navParams.get("weel2")
    this.ambata11 = this.navParams.get("ambata11")
    this.ambata12 = this.navParams.get("ambata12")
    this.ambata21 = this.navParams.get("ambata21")
    this.ambata22 = this.navParams.get("ambata22")
    this.extractionsItems=this.navParams.get("extractions")
    this.ambate= new Ambate({
      weel1:this.weel1,
      weel2:this.weel2,
      ambata11:this.ambata11,
      ambata21:this.ambata21
    })
    console.log("ambata",this.ambate)
  }
  dismiss(value?:{}){
    this.modalCtrl.dismiss(value)
  }

}
