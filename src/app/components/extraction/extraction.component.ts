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
  @Input() repetitions: number[]
  @Input() echoedNumbers: number[]

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
  }


  getNumber(index:number){
    return this.extraction ?this.transformation.transform( this.extraction.extraction[index]):undefined
  }

  ngOnInit() {
    this.transformation= this.transformation ||new Neutro()

    
  }
  setColor(index:number){
    let output= ""
    const number2Check= this.getNumber(index)
    if(this.ambate){
    const ambate =!this.echoedNumbers?[this.ambate.ambata11,this.ambate.ambata12,this.ambate.ambata21,this.ambate.ambata22,]:
    [this.ambate.ambata11,this.ambate.ambata12,this.ambate.ambata21,this.ambate.ambata22,...this.echoedNumbers]
     output =ambate.includes(number2Check)?"green":""
    }
    if(this.repetitions){
      output=this.repetitions[index]==1?"repetition":output
    }
     
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
