import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
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
weel1:string
weel2:string
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
  }
  dismiss(value?:{}){
    this.modalCtrl.dismiss(value)
  }

}
