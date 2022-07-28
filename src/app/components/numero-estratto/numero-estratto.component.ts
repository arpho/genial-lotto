import { Component, Input, OnInit } from '@angular/core';
import { TransformationInterface } from 'src/app/models/trasformationInterface';

@Component({
  selector: 'app-numero-estratto',
  templateUrl: './numero-estratto.component.html',
  styleUrls: ['./numero-estratto.component.scss'],
})
export class NumeroEstrattoComponent implements OnInit {
  @Input() numero:number
  @Input() color:string
  @Input() function:TransformationInterface
  @Input()showFigures:boolean

  constructor() { }

  ngOnInit() {
  }

}
