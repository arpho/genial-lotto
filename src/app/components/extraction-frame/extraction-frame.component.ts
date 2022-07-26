import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Ambate } from 'src/app/models/ambate';
import { Extraction } from 'src/app/models/extractionModel';
import { TransformationInterface } from 'src/app/models/trasformationInterface';

@Component({
  selector: 'app-extraction-frame',
  templateUrl: './extraction-frame.component.html',
  styleUrls: ['./extraction-frame.component.scss'],
})
export class ExtractionFrameComponent implements OnInit, OnChanges {
  @Input() estrazioni:Extraction[]
  @Input()transformation:TransformationInterface
  @Input() ambate:Ambate
  @Input() data:string
  selectedWeels:string[] = []
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
  highlighted:boolean

  weels: Extraction[]


  @Input()repetitions: number[]
  @Input()echoedNumbers: number[]

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
      this.weels = [
        this.Bari,
        this.Cagliari,
        this.Firenze,
        this.Genova,
        this.Milano,
        this.Napoli,
        this.Palermo,
        this.Roma,
        this.Torino,
        this.Venezia,
        this.Nazionale
      ]
    }
  }

  ngOnInit() {

  }

  getNumber(index:number){
    return this.Cagliari ?this.transformation.transform( this.Cagliari.extraction[index]):undefined
  }

  getTitle(){
    let out = ""
    if(this.Cagliari){
      out = this.Cagliari.title  
    }
    return out
  }



  setColor(index:number){
    let output= ""
    const number2Check= this.getNumber(index)
    console.log("echoed number",this.echoedNumbers)
     if(this.ambate){
    const ambate =[this.ambate.ambata11,this.ambate.ambata12,this.ambate.ambata21,this.ambate.ambata22,]
     output =ambate.includes(number2Check)?"green":""
    } 
    if(this.repetitions){
      output=this.repetitions[index]==1?"repetition":output
    }
     
    return output
  }
  isHighLighted(extraction:Extraction){ // evidenzia la ruota selezionata nel quadro estrazionario
  this.selectedWeels= [this.ambate.weel1,this.ambate.weel2]
    return this.selectedWeels.includes( extraction.weel)

  }

}
