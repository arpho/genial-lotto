import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalsService {
  private modals: { key: number, modal: HTMLIonModalElement }
  constructor() {
    this.modals = { key: 0, modal: undefined }
  }
  setModal(key: number, modal: HTMLIonModalElement) {
    this.modals[key] = modal
  }
  dismissModal(key: number, data) {
    this.modals[key].dismiss(data)
  }


}
