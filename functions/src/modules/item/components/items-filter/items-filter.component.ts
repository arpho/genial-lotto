
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FilterPopupPage } from '../../pages/filter-popup/filter-popup.page';
import { QuestionBase } from '../../../dynamic-form/models/question-base';
import { ItemModelInterface } from '../../models/itemModelInterface';
//import { access } from 'fs';
// tslint:disable:semicolon
@Component({
  selector: 'app-items-filter',
  templateUrl: './items-filter.component.html',
  styleUrls: ['./items-filter.component.scss'],
})
export class ItemsFilterComponent implements OnInit {
  @Input() filterFields: Array<QuestionBase<any>>
  @Output() filterSet: EventEmitter<{}> = new EventEmitter()
  @Output() filterFunction: EventEmitter<(item: ItemModelInterface) => boolean> = new EventEmitter()

  constructor(public modal: ModalController) { }

  ngOnInit() {
  }
  async showPopup() {
    const modal = await this.modal.create({ component: FilterPopupPage, componentProps: { filterFields: this.filterFields } })
    modal.onDidDismiss().then(data => {
      this.filterSet.emit(data.data)
      this.filterFunction.emit(this.filterFactory(data.data, this.filterFields))
    })
    return await modal.present()
  }
  filterFactory = (filterSettings: {}, fields: Array<QuestionBase<any>>) => {
    const questionMapper = (question: QuestionBase<any>) => question.filterFactory(filterSettings)
    const filterFunctionReducer = (acc: (item: ItemModelInterface) => boolean, currentFunction: (item: ItemModelInterface) => boolean) =>
      (item: ItemModelInterface) => acc(item) && currentFunction(item)

    return fields.map(questionMapper).reduce(filterFunctionReducer, (item: ItemModelInterface) => true)
  }



}
