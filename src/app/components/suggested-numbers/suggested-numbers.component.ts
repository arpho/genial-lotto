import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-suggested-numbers',
  templateUrl: './suggested-numbers.component.html',
  styleUrls: ['./suggested-numbers.component.scss'],
})
export class SuggestedNumbersComponent implements OnInit {
  @Input() firstNumber:number
  @Input() secondNumber:number
  @Input() firstVNumber:number
  @Input() secondVNumber:number
  @Input() weel1:string
  @Input() weel2:string
  @Input() message1:string
  @Input() message2:string
  color1 = "yellow"
  color2 = "orange"
  constructor() { }

  ngOnInit() {}

}
