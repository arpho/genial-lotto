import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-components',
  templateUrl: './components.page.html',
  styleUrls: ['./components.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
