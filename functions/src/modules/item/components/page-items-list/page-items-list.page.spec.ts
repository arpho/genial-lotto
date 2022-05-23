import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageItemsListComponent } from './page-items-list.page';
import { FilterItemsPipe } from '../../pipes/filter-items.pipe';
import { AlertController, ModalController, AngularDelegate } from '@ionic/angular';
import { Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { SorterItemsPipe } from '../../pipes/sorter-items.pipe';

describe('PageItemsListPage', () => {
  let component: PageItemsListComponent;
  let fixture: ComponentFixture<PageItemsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PageItemsListComponent, FilterItemsPipe,SorterItemsPipe],
      providers: [AlertController,ModalController,AngularDelegate],
      imports: [RouterModule, RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageItemsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
