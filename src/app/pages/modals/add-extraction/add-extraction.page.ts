import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-extraction',
  templateUrl: './add-extraction.page.html',
  styleUrls: ['./add-extraction.page.scss'],
})
export class AddExtractionPage implements OnInit {

  constructor(public modalCtrl:ModalController) { }



  ngOnInit() {
  }

  dismiss(v?:any){
    this.modalCtrl.dismiss(v)
  }

}
