import { Component, OnInit, Input } from '@angular/core';
import { Value } from '../../models/value';

@Component({
  selector: 'app-show-value',
  templateUrl: './show-value.component.html',
  styleUrls: ['./show-value.component.scss'],
})
export class ShowValueComponent implements OnInit {
  @Input() value:Value;

  constructor() { }

  ngOnInit() {
  }

}
