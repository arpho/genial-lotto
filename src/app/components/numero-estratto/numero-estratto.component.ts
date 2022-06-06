import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-numero-estratto',
  templateUrl: './numero-estratto.component.html',
  styleUrls: ['./numero-estratto.component.scss'],
})
export class NumeroEstrattoComponent implements OnInit {
  @Input() numero:number

  constructor() { }

  ngOnInit() {}

}
