import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  OnChanges,
  SimpleChanges
  // tslint:disable: semicolon
  // tslint:disable: quotemark
} from "@angular/core";
import {
  FormGroup,
  AbstractControl,
  Validators,
  FormControl
} from "@angular/forms";

import { QuestionBase } from "../../models/question-base";
import { QuestionControlService } from "../../services/question-control.service";

@Component({
  selector: "app-dynamic-form",
  templateUrl: "./dynamic-form.component.html",
  styleUrls: ["./dynamic-form.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [QuestionControlService]
})
export class DynamicFormComponent implements OnInit,OnChanges {
  @Output() interactiveSubmit: EventEmitter<{}> = new EventEmitter();
  @Output() singleSubmit: EventEmitter<{}> = new EventEmitter();
  // the page could need to observe the form
  @Output() Form: EventEmitter<FormGroup> = new EventEmitter()
  @Output() changes:EventEmitter<SimpleChanges> = new EventEmitter()
  @Input() questions: QuestionBase<any>[] = [];
  @Input() submitText: string;

  form: FormGroup;
  payLoad

  constructor(private qcs: QuestionControlService) { }
  ngOnChanges(changes: SimpleChanges): void {
    this.changes.emit(changes)
  }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
    this.form.valueChanges.subscribe(data =>{
      this.changes.emit(data)
    })
    if (this.questions.filter(v => v.key === "location").length > 0) {
      this.form.addControl("address", new FormControl()); // input-geolocation usa un control in più
    }
    this.form.valueChanges.subscribe(v => {
      this.interactiveSubmit.emit(v);
    });
    this.Form.emit(this.form)
  }

  onSubmit() {
    this.payLoad = {}
    this.singleSubmit.emit(this.form.value);
  }
}
