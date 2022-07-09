import { Component, Input, OnInit } from '@angular/core';
import { Neutro } from 'src/app/business/neutro';
import { Ambate } from 'src/app/models/ambate';
import { Extraction } from 'src/app/models/extractionModel';
import { MyToastService } from 'src/app/modules/helpers/services/toaster/my-toast-service.service';

@Component({
  selector: 'app-browse-extractions',
  templateUrl: './browse-extractions.component.html',
  styleUrls: ['./browse-extractions.component.scss'],
})
export class BrowseExtractionsComponent implements OnInit {
  @Input() extractionsItems: Extraction[]
  selectedData: string
  selectedData1: string
  selectedData2: string

  previous() {
    if(this.step+1<this.dateEstrazioni.length){
    this.step += 1
    this.setData()}
    else{
      this.toaster.presentToast("non ci estrazioni precedenti a questa")
    }
  }
  next() {
    if(this.step>=1){
    this.step -= 1
    this.setData()}
    else{
      this.toaster.presentToast("non ci sono estrazioni successive a questa!")
    }
  }
  neutralFunction = new Neutro()
  ambate:Ambate
  @Input() dateEstrazioni: string[]
  @Input() ambata11: number
  @Input() ambata12: number
  @Input() ambata21: number
  @Input() ambata22: number
  @Input() weel1: string
  @Input() weel2: string
  step = 0
  setData(){
    this.selectedData=this.dateEstrazioni[this.step]
    this.selectedData1=this.dateEstrazioni[this.step+1]
    this.selectedData2=this.dateEstrazioni[this.step+2]
  }
  constructor(public toaster:MyToastService) { }

  ngOnInit() {
this.ambate = new Ambate({
  weel1:this.weel1,
  weel2:this.weel2,
  ambata11:this.ambata11,
  ambata21:this.ambata21
})
console.log("ambate",this.ambate)
    this.setData()
   }

}
