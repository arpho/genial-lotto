import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from "@angular/core";
import { MyItemComponent } from "../item/item.component";
import { AlertController, ModalController, SelectValueAccessor } from "@ionic/angular";
import { ItemModelInterface } from "../../models/itemModelInterface";
import { ItemServiceInterface } from "../../models/ItemServiceInterface";
import { QuickAction } from "../../models/QuickAction";
import { Router } from "@angular/router";
import { Value } from '../../models/value';

@Component({
  selector: "app-page-item",
  templateUrl: "./page-item.page.html",
  styleUrls: ["./page-item.page.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageItemComponent extends MyItemComponent implements OnInit {
  @Input() Item: ItemModelInterface;
  title: string
  note: string
  value2: Value
  value3: Value
  value4: Value
  Note:Value

  constructor(public alertCtrl: AlertController, public router: Router, public ref: ChangeDetectorRef, public modal: ModalController) {
    super(alertCtrl);
    this.Note = new Value({label:'note',value:this.note})

  }


  ngOnInit() {
    if (this.Item) {
      this.setValue()
    }
  }
  setValue() {
    this.title = String(this.Item?this.Item.getTitle().value:'')
    this.note = String(this.Item?this.Item.getNote().value:'')
    this.value2 = this.Item.getValue2()
    this.value3 = this.Item.getValue3()
    this.value4 = this.Item.getValue4()
  }
  doAction(action: QuickAction) {
    action.getAction()({
      alertCtrl: this.alertCtrl,
      router: this.router,
      Service: this.Service,
      modal: this.modal
    });
  }
}
