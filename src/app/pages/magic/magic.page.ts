import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-magic-page',
  templateUrl: './magic.page.html',
  styleUrls: ['./magic.page.scss'],
})
export class MagicPage implements OnInit {

  constructor(public modalCtrl:ModalController) { }



  ngOnInit() {
  }

  ciao(){
    console.log("ciao")
    this.dismiss()
  }

 public  dismiss(value?:{}){
    this.modalCtrl.dismiss(value)
  }

}
