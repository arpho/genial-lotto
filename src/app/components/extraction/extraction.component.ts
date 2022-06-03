import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Extraction } from 'src/app/models/extractionModel';

@Component({
  selector: 'app-extraction',
  templateUrl: './extraction.component.html',
  styleUrls: ['./extraction.component.scss'],
})
export class ExtractionComponent implements OnInit, OnChanges {
  @Input() extraction:Observable<Extraction> = new Observable()
  selectedExtraction: Extraction

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("change",changes)
  }

  ngOnInit() {

    console.log("extraction",this.extraction)
    this.extraction.subscribe((e)=>{
      console.log("subscription",e)
      this.selectedExtraction = e
    })
  }

}
