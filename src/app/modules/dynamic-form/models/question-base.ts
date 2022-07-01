// tslint:disable:semicolon
// tslint:disable: quotemark
// tslint:disable: no-string-literal
import { ItemModelInterface } from '../../item/models/itemModelInterface';
import { QuestionProperties } from './questionproperties';
import { ItemServiceInterface } from '../../item/models/ItemServiceInterface';
import { ComboValue } from './ComboValueinterface';
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
//import { Options } from 'selenium-webdriver';

export class QuestionBase<T> {
  value: T;
  key: string;
  label: string;
  required: boolean;
  order: number;
  type: string | ItemModelInterface
  controlType: string;
  iconTrue: string;
  repeatPassword?:boolean
  iconFalse: string;
  labelTrue: string;
  validator?:(control: AbstractControl)=> ValidationErrors;
  asyncValidator?:AsyncValidatorFn;
  retypePassword?:boolean
  presentation?:'date'|'date-time'|'time'
  isDateEnabled?:(date:string)=> boolean
  service: ItemServiceInterface
  labelFalse: string;
  text: string;
  disabled: boolean
  options: ComboValue[]
  onChange: any = () => { };
  neutralFilter: (item: ItemModelInterface) => true
  // any solo per testing TOBE refactored
  public  filterShownItems?:(e:ItemModelInterface)=> boolean
  public filterFunction: (item: ItemModelInterface, arg: ItemModelInterface | any) => boolean



  constructor(
    options: QuestionProperties<any> | { key: string, label: string }
  ) {
    this.value = options["value"];
    this.key = options.key || "";
    this.type = options['type'] || ''
    this.label = options.label || "";
    this.required = !!options['required'];
    this.value = options['value']
    this.filterFunction = options['filterFunction']
    this.order = options['order'] === undefined ? 1 : options['order'];
    this.asyncValidator=options['asyncValidator']
    this.controlType = options['controlType'] || "";
    // tslint:disable-next-line: prefer-const
    for (let key in options) {
      if (options[key]) {
        this[key] = options[key]
      }
    }
    this.neutralFilter = (item: ItemModelInterface) => true
    this.filterFunction = options['filterFunction'] || this.neutralFilter;
  }
  selectedItem(item: ItemModelInterface) { }
  ItemsFilterFunction(item: ItemModelInterface): boolean {
    return true
  }
  createPopup(service: ItemServiceInterface) { }
  sorterFunction(a: ItemModelInterface, b: ItemModelInterface): number { return 0 }
  filterFactory = (options: {}) => {
    return options && options[this.key] ? (item: ItemModelInterface) =>
      this.filterFunction(options[this.key], item) : this.neutralFilter

  }



}
