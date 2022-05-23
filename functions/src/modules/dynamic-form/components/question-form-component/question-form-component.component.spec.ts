import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionFormComponent } from './question-form-component.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ItemModule } from 'src/app/modules/item/item.module';

describe('QuestionFormComponent', () => {
  let component: QuestionFormComponent;
  let fixture: ComponentFixture<QuestionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionFormComponent],
      imports: [ReactiveFormsModule,
        CommonModule,
        IonicModule.forRoot(),
        ItemModule,
        ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
