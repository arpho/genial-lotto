import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Extraction } from 'src/app/models/extractionModel';

@Component({
  selector: 'app-extraction',
  templateUrl: './extraction.component.html',
  styleUrls: ['./extraction.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class ExtractionComponent implements OnInit, OnChanges {
  color="green"
  @Input() extraction: Extraction

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("change",changes)
  }


  getNumber(index:number){
    return this.extraction ?this.extraction.extraction[index]:undefined
  }

  ngOnInit() {

    console.log("extraction component",this.extraction)
    
  }

}
