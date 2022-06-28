import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-extraction',
  templateUrl: './add-extraction.page.html',
  styleUrls: ['./add-extraction.page.scss'],
})
export class AddExtractionPage implements OnInit {
  formFields: any[]

  filter(ev){
    console.log("typing",ev)
  }


  submit(ev){
    console.log("submitting",ev)
  }
  constructor(public modalCtrl:ModalController) { }



  ngOnInit() {
  }

  dismiss(v?:any){
    this.modalCtrl.dismiss(v)
  }

}
