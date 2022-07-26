import { Component, Input, OnInit } from '@angular/core';
import { Ambate } from 'src/app/models/ambate';
import { Extraction } from 'src/app/models/extractionModel';
import { TransformationInterface } from 'src/app/models/trasformationInterface';

@Component({
  selector: 'app-weel-frame',
  templateUrl: './weel-frame.component.html',
  styleUrls: ['./weel-frame.component.scss'],
})
export class WeelFrameComponent implements OnInit {
  @Input() extraction:Extraction
  @Input() transformation:TransformationInterface
  @Input() ambate:Ambate
  @Input() repetitions: number[]
  @Input() echoedNumbers: number[]
  @Input() highlighted: boolean
  constructor() { }

  ngOnInit() {
  }



  getNumber(index:number){
    return this.extraction ?this.transformation.transform( this.extraction.extraction[index]):undefined
  }

  getTitle(){
    let out = ""
    if(this.extraction){
      out = this.extraction.title  
    }
    return out
  }



  setColor(index:number){
    let output= ""
    const number2Check= this.getNumber(index)
    if(this.ambate){
    const ambate =[this.ambate.ambata11,this.ambate.ambata12,this.ambate.ambata21,this.ambate.ambata22,]//:
    //[this.ambate.ambata11,this.ambate.ambata12,this.ambate.ambata21,this.ambate.ambata22,...this.echoedNumbers]
     output =ambate.includes(number2Check)?"green":""
    }
    if(this.repetitions){
      output=this.repetitions[index]==1?"repetition":output
    }
     
    return output
  }

}
