import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { DateHelpers } from 'src/app/business/dateHelpers';
import { IntervalCalculator } from 'src/app/business/intervalCalculator';
import { makeData4D3 } from 'src/app/business/makeData4D3';
import { Interval } from 'src/app/models/interval';
import { ExtractionService } from 'src/app/services/extractions/estrazioni.service';

@Component({
  selector: 'app-intervals-d3',
  templateUrl: './intervals-d3.component.html',
  styleUrls: ['./intervals-d3.component.scss'],
})
export class IntervalsD3Component implements OnInit,OnDestroy {
@Input() weel:string
@Input() extractedNumber:number
subscription
barData:Interval[]
  constructor(private service:ExtractionService) { }
  ngOnDestroy(): void {
    if(this.subscription){
      this.subscription.unsubscribe()
    }
  }

  ngOnInit() {
    console.log("weel",this.weel,this.extractedNumber)
    this.subscription = this.service.items.subscribe(extractions=>{
      const intervals= new IntervalCalculator(extractions
        .sort(DateHelpers
          .sorterDescendingDate))
          .retrieveInterval(this.weel,this.extractedNumber)
          const makeData = new makeData4D3()
          this.barData = makeData.transform( intervals).slice(0,20)
          console.log("barData",this.barData)


    })


  }

}
