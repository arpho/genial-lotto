// tslint:disable:semicolon
import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  ComponentFactoryResolver
  // tslint:disable: quotemark
} from "@angular/core";
import { AlertController, ModalController } from "@ionic/angular";
import { ItemModelInterface } from "../../models/itemModelInterface";
import { ItemServiceInterface } from "../../models/ItemServiceInterface";
import { Router } from "@angular/router";
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { ComponentRef } from '@ionic/core';

@Component({
  selector: "app-page-items-list",
  templateUrl: "./page-items-list.page.html",
  styleUrls: ["./page-items-list.page.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageItemsListComponent implements OnInit, OnChanges {
  // tslint:disable-next-line: variable-name
  @Input() items_list: ItemModelInterface[];
  @Input() secondSpinner
  @Input() service: ItemServiceInterface;
  @Input() editModalPage: ComponentRef
  public dummyItem: ItemModelInterface;
  @Input() filterFunction: (item: ItemModelInterface) => boolean;
  @Input() sorterFunction: (a: ItemModelInterface, b: ItemModelInterface) => number
  public showSpinner = true;
  @Input() createModalPage: ComponentRef;

  constructor(
    public alertCtrl: AlertController,
    public router: Router,
    public modalController: ModalController,
    public ref: ChangeDetectorRef,
  ) {
    // this.showSpinner = false
    this.filterFunction = v => true;



  }


  getMultiplicityText() {
    var out = this.dummyItem.getCountingText().plural
    if (this.countItems() == 1) {
      out = this.dummyItem.getCountingText().singular
    }
    

    return out
  }

  async createItem() {
    const modal = await this.modalController.create({ component: this.createModalPage })
    return await modal.present()

  }
  ngOnInit() {

    if (!this.filterFunction) {
      this.filterFunction = this.filterFunction ? this.filterFunction : (v: ItemModelInterface) => true;
    }
    if (!this.sorterFunction) {
      this.sorterFunction = (a: ItemModelInterface, b: ItemModelInterface) => 0
    }
    if (this.service) {
      this.dummyItem = this.service.getEmptyItem();
      if (this.items_list) {
        const next = () => {
          this.ref.markForCheck()
        }
        this.items_list.forEach(item => {
          if (item) {
            item.load(next)
          }
        })
      }
    }
  }

  async updateItem(item: ItemModelInterface, slide: {}) {
    const modal = await this.modalController.create({ component: this.editModalPage, componentProps: { item } })
    // tslint:disable-next-line: no-string-literal
    slide['close']()
    return await modal.present()
  }

  async deleteItem(item: ItemModelInterface, slide: {}) {
    // tslint:disable-next-line: no-string-literal
    slide['close']();
    const element = this.service.getEmptyItem().getElement();
    const alert = await this.alertCtrl.create({
      message: ` vuoi davvero cancellare quest${element.genere} ${element.element
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

  ngOnChanges(changes: SimpleChanges) {




    if (this.service && this.service._items) {
      this.service._items.subscribe((items) => {
        if (items) {
          this.showSpinner = false
          this.secondSpinner = false
        }
      })
    }
    if (changes.items_list && changes.items_list.currentValue) {
      this.items_list = changes.items_list.currentValue;
      this.showSpinner = false;
    }
    if (changes.filterFunction) {
      this.filterFunction = changes.filterFunction.currentValue;
    }
  }

  countItems() {
    var count
    if (this.service) {
      this.service._items.subscribe(items => {
        count = items.filter(this.filterFunction).length
      })
    }
    return (count) ? count : "loading";
  }

  editItem(item: ItemModelInterface) {
    this.router.navigate([this.editModalPage, item.key]);
  }


}
