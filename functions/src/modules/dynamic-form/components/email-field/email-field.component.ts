import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormBuilder, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-email-field',
  templateUrl: './email-field.component.html',
  styleUrls: ['./email-field.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    multi: true,
    useExisting: EmailFieldComponent
  },
  {
    provide: NG_VALIDATORS,
    multi: true,
    useExisting: EmailFieldComponent
  }]
})
export class EmailFieldComponent implements OnInit, ControlValueAccessor, Validator {


  @Input() email = ''
  disabled: boolean;
  touched = false;
  emailForm;
  subscription: Subscription


  set value(email: string) {
    this.email = email
  }
  private onChange: Function = (password: string) => { };
  // tslint:disable-next-line: ban-types
  private onTouch: Function = () => { };
  private onValidationChange: any = () => { };

  writeValue(email: string): void {
    this.email = email
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouch = fn;
  }


  setDisabledState(disabled: boolean): void {
    this.disabled = disabled;
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouch();
      this.touched = true;
    }
  }



  constructor(public formBuilder: FormBuilder) { }
  validate(control: AbstractControl): ValidationErrors {
    if (!this.isValid()) {
      return { notValidEmail: this.email }
    }
  }
  registerOnValidatorChange?(fn: () => void): void {
    this.onValidationChange = fn
  }

  isValid() {

    return !this.touched || !!this.emailForm.value.email?.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  }


  ngOnInit() {
    this.emailForm = this.formBuilder.group({ email: new FormControl(this.email, Validators.email) })
    this.subscription = this.emailForm.valueChanges.subscribe(d => {
      this.markAsTouched()
      this.onChange({ 'email': d.email })
    })
  }

}
