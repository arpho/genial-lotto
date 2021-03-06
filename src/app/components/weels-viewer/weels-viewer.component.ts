import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Ambate } from 'src/app/models/ambate';
import { Extraction } from 'src/app/models/extractionModel';
import { TransformationInterface } from 'src/app/models/trasformationInterface';

@Component({
  selector: 'app-weels-viewer',
  templateUrl: './weels-viewer.component.html',
  styleUrls: ['./weels-viewer.component.scss'],
})
export class WeelsViewerComponent implements OnInit,OnChanges {
  @Input() estrazioni:Extraction[]
  @Input()transformation:TransformationInterface
  @Input() ambate:Ambate
  @Input() data:string
  Bari:Extraction
  Cagliari: Extraction
  Firenze: Extraction
  Genova: Extraction
  Milano: Extraction
  Napoli: Extraction
  Palermo: Extraction
  Roma: Extraction
  Torino: Extraction
  Venezia: Extraction
  Nazionale: Extraction

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if(this.estrazioni&& this.data){
      const extraction= this.estrazioni.filter(e=>{
        return e.italianDate==this.data
      })
      this.Bari= extraction.filter(e=>{
        return e.weel== "Bari"
      })[0]
      this.Cagliari= extraction.filter(e=>{
        return e.weel== "Cagliari"
      })[0]
      this.Firenze= extraction.filter(e=>{
        return e.weel== "Firenze"
      })[0]
      this.Genova= extraction.filter(e=>{
        return e.weel== "Genova"
      })[0]
      this.Milano= extraction.filter(e=>{
        return e.weel== "Milano"
      })[0]
      this.Napoli= extraction.filter(e=>{
        return e.weel== "Napoli"
      })[0]
      this.Palermo= extraction.filter(e=>{
        return e.weel== "Palermo"
      })[0]
      this.Roma= extraction.filter(e=>{
        return e.weel== "Roma"
      })[0]
      this.Torino= extraction.filter(e=>{
        return e.weel== "Torino"
      })[0]
      this.Venezia= extraction.filter(e=>{
        return e.weel== "Venezia"
      })[0]
      this.Nazionale= extraction.filter(e=>{
        return e.weel== "Nazionale"
      })[0]
    }
  }

  isHighlighted = null

  ngOnInit() {
 if(this.ambate){
  this.isHighlighted= (weel:string)=>{
    const out = this.ambate? [this.ambate.weel1,this.ambate.weel2].includes(weel):false
    return out
 }
}
  }


}
