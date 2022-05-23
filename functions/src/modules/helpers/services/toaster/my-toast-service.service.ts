import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class MyToastService {

  async presentToast(message:string,position:'top'|'bottom'|'middle'='top',duration=2000) {
    const toast = await this.toastController.create({
      message: message,
      position:position,
      duration: duration
    });
    toast.present();
  }

  constructor(public toastController:ToastController) { }
}
