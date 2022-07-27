import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Neutro } from 'src/app/business/neutro';
import { Ambate } from 'src/app/models/ambate';
import { Extraction } from 'src/app/models/extractionModel';
import { TransformationInterface } from 'src/app/models/trasformationInterface';
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
    if (this.step >= 1) {
      this.step -= 1
      this.setData()
    }
    else {
      this.toaster.presentToast("non ci estrazioni precedenti a questa", "middle")
    }
  }
  next() {
    if (this.step <= this.extractionsDate.length - 1) {
      this.step += 1
      this.setData()
    }
    else {
      this.toaster.presentToast("non ci sono estrazioni successive a questa!", "middle")
    }
  }

  ambate: Ambate
  @Input() extractionsDate: string[]
  @Input() ambata11: number
  @Input() ambata12: number
  @Input() ambata21: number
  @Input() ambata22: number
  @Input() weel1: string
  @Input() weel2: string
  @Input() transformation: TransformationInterface
  @Input() echoedNumbers:number[]
  @Input() showFigures:boolean
  step = 0
  setData() {
    this.selectedData = this.extractionsDate[this.step]
    this.selectedData1 = this.step + 1 <= this.extractionsDate.length ? this.extractionsDate[this.step + 1] : this.selectedData1
    this.selectedData2 = this.step + 2 <= this.extractionsDate.length ? this.extractionsDate[this.step + 2] : this.selectedData2
  }
  constructor(public toaster: MyToastService) { }


  ngOnInit() {
    this.ambate = new Ambate({
      weel1: this.weel1,
      weel2: this.weel2,
      ambata11: this.ambata11,
      ambata21: this.ambata21
    })
    if (this.extractionsDate) {
      this.setData()
    }
  }

}
