import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormBuilder, FormControl, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-password-field',
  templateUrl: './password-field.component.html',
  styleUrls: ['./password-field.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: PasswordFieldComponent
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: PasswordFieldComponent
    }
  ]
})
export class PasswordFieldComponent implements OnInit, ControlValueAccessor, Validator, OnDestroy {
  private onChange: Function = (password: string) => { };
  // tslint:disable-next-line: ban-types
  private onTouch: Function = () => { };
  private onValidationChange: any = () => { };
  @Input() retypePassword: boolean
  disabled: boolean;
  password = '';
  passwordForm: FormGroup
  touched = false;
  subscription: Subscription
  _id: string
  retype: string;
  @Input()
  set id(id) {
    this._id = id
  }

  get id() {
    return this._id
  }
  retypePasword: string
  @Input()
  set value(pass: string) {
    this.password = pass
  }

  get value() {
    return this.password
  }

  get match() {
    return this.passwordForm.value.password == this.passwordForm.value.retype
  }

  get isValid() {
    return this.match || !this.touched || (this.touched && ! !!this.retypePassword && !this.match)
  }

  constructor(public formBuilder: FormBuilder) {



  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe()
    }
  }
  validate(control: AbstractControl): ValidationErrors | null {
    const password = control.value

    if (this.retypePassword) {
      if (password.password != password.retype) {
        return { passwordMismatch: {} }

      }
    }
  }
  registerOnValidatorChange?(fn: () => void): void {
    this.onValidationChange = fn
  }
  writeValue(pass: string): void {
    this.password = pass
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

  ngOnInit() {
    this.passwordForm = this.retypePassword ? this.formBuilder.group({
      password: new FormControl(this.password, Validators.required),
      retype: new FormControl(this.retype)
    }) : this.formBuilder.group({
      password: new FormControl(this.password, Validators.required)
    })

    this.subscription = this.passwordForm.valueChanges.subscribe(d => {
      this.markAsTouched()
      this.onChange({ 'password': d.password, 'retype': d.retype })
    })
  }

}
