import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorItemsComponent } from './selector-items.component';
import { ModalController, AngularDelegate } from '@ionic/angular';

describe('SelectorItemsComponent', () => {
  let component: SelectorItemsComponent;
  let fixture: ComponentFixture<SelectorItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SelectorItemsComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [ModalController, AngularDelegate]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
