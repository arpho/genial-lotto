import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-browsing',
  templateUrl: './browsing.page.html',
  styleUrls: ['./browsing.page.scss'],
})
export class BrowsingPage implements OnInit {

  constructor(
    public modalCtrl:ModalController) { }

  ngOnInit() {
  }
  dismiss(value?:{}){
    this.modalCtrl.dismiss(value)
  }

}
