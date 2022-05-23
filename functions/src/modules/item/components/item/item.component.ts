import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  ChangeDetectionStrategy
} from "@angular/core";
import { AlertController } from "@ionic/angular";
import { ItemModelInterface } from "../../models/itemModelInterface";
import { ItemServiceInterface } from "../../models/ItemServiceInterface";

@Component({
  selector: "my-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyItemComponent implements OnInit, OnChanges {
  @Input() Item: ItemModelInterface;
  @Input() Service: ItemServiceInterface;
  constructor(public alertCtrl: AlertController) { }

  ngOnChanges(changes: SimpleChanges) { }

  ngOnInit() {
    if (this.Item) {
      this.Item.load()
    }
  }
}
