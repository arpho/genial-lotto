import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Neutro } from 'src/app/business/neutro';
import { Extraction } from 'src/app/models/extractionModel';
import { TransformationInterface } from 'src/app/models/trasformationInterface';

@Component({
  selector: 'app-extraction',
  templateUrl: './extraction.component.html',
  styleUrls: ['./extraction.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class ExtractionComponent implements OnInit, OnChanges {
  color="green"
  @Input() extraction: Extraction
  @Input()transformation:TransformationInterface

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("changes",changes)
  }


  getNumber(index:number){
    return this.extraction ?this.transformation.transform( this.extraction.extraction[index]):undefined
  }

  ngOnInit() {
    this.transformation= this.transformation ||new Neutro()

    
  }

}
