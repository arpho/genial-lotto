import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  ChangeDetectionStrategy
} from "@angular/core";
import { ItemModelInterface } from "../../models/itemModelInterface";
import { AlertController } from "@ionic/angular";
import { ItemServiceInterface } from "../../models/ItemServiceInterface";
import { ComponentRef } from '@ionic/core';

@Component({
  selector: "my-items-list",
  templateUrl: "./items-list.component.html",
  styleUrls: ["./items-list.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemsListComponent implements OnInit, OnChanges {
  @Input() items_list: ItemModelInterface[];
  @Input() service: ItemServiceInterface;
  public dummyItem: ItemModelInterface;
  @Input() filterFunction: (item: ItemModelInterface) => boolean;
  @Input() createPopup:any
  public showSpinner = true;

  constructor(public alertCtrl: AlertController) { }

  ngOnInit() {
    this.filterFunction = (v: ItemModelInterface) => true;
    if (this.service) {
      this.dummyItem = this.service.getEmptyItem();
    }

  }


  async create() {
    const popup = this.createPopup;
    const alert = await this.alertCtrl.create(popup);
    await alert.present();
  }

  async deleteItem(item: ItemModelInterface, slide) {
    slide.close();
    const element = this.service.getEmptyItem().getElement();
    const alert = await this.alertCtrl.create({
      message: ` vuoi davvero cancellare quest${element.genere} ${
        element.element
        }?(${item.title})`,
      buttons: [
        {
          text: "Annulla",
          role: "cancel",
          handler: () => { }
        },
        {
          text: "Cancella",
          handler: () => {
            this.service.deleteItem(item.key);
          }
        }
      ]
    });
    await alert.present();
  }

pluralOrSingular(text:{singular:string,plural:string},n:number){

  return n>1? text.plural:text.singular
}

  async showFilter() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.items_list && changes.items_list.currentValue) {
      this.items_list = changes.items_list.currentValue;
      this.showSpinner = false;
    }
    if (changes.filterFunction) {
      this.filterFunction = changes.filterFunction.currentValue;
    }
  }

  countItems() {
    return this.items_list
      ? this.items_list.filter(this.filterFunction).length
      : "loading";
  }

  async do(item: ItemModelInterface) {
    const popup = item.getEditPopup(item, this.service);
    const alert = await this.alertCtrl.create(popup);
    await alert.present();
  }
}
