import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Neutro } from 'src/app/business/neutro';
import { Ambate } from 'src/app/models/ambate';
import { Extraction } from 'src/app/models/extractionModel';
import { TransformationInterface } from 'src/app/models/trasformationInterface';

@Component({
  selector: 'app-extraction',
  templateUrl: './extraction.component.html',
  styleUrls: ['./extraction.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class ExtractionComponent implements OnInit, OnChanges {
   color="" 
  @Input() extraction: Extraction
  @Input()transformation:TransformationInterface
  @Input()highlighted:boolean
  @Input() ambate:Ambate

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
  }


  getNumber(index:number){
    return this.extraction ?this.transformation.transform( this.extraction.extraction[index]):undefined
  }

  ngOnInit() {
    console.log("ambate",this.ambate)
    this.transformation= this.transformation ||new Neutro()

    
  }
  setColor(estrazione:number){
    let output= ""
    if(this.ambate){
    const ambate =[this.ambate.ambata11,this.ambate.ambata12,this.ambate.ambata21,this.ambate.ambata22]
     output =ambate.includes(estrazione)?"verde":""}
    return output
  }

  makesPadding(str:string,size:number){
  var out = ""
  for (let i =0;i+str.length<=size;i++){
    out= out +'_'
  }
  return out

}

  getTitle(){
    let out = ""
    if(this.extraction){
      out = this.extraction.title  
    }
    return out

  }

}
