import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Extraction } from 'src/app/models/extractionModel';

@Component({
  selector: 'app-extraction',
  templateUrl: './extraction.component.html',
  styleUrls: ['./extraction.component.scss'],
})
export class ExtractionComponent implements OnInit, OnChanges {
  @Input() extraction:Extraction

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("change",changes)
  }

  ngOnInit() {}

}
