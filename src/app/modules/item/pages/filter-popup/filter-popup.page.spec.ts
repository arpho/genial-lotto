import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterPopupPage } from './filter-popup.page';
import { ModalController, AngularDelegate, NavParams } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { MockNavParams } from './mockNavParams';

describe('FilterPopupPage', () => {
  let component: FilterPopupPage;
  let fixture: ComponentFixture<FilterPopupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterPopupPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers:[ModalController,AngularDelegate,
        {provide: NavParams, useClass: MockNavParams}
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterPopupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
