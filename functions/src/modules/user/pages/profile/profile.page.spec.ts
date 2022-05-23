import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {  ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ProfilePage } from './profile.page';
import { Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import firebase from 'firebase/compat/app';
import { AuthService } from '../../services/auth.service';
import { ProfileService } from '../../services/profile.service';

TestBed.configureTestingModule({
  declarations: [ ProfilePage ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [ AlertController,AuthService,ProfileService,Router ],
  imports: [RouterModule, RouterTestingModule,firebase],
})
.compileComponents();
describe('ProfilePage', () => {
  let component: ProfilePage;
  let fixture: ComponentFixture<ProfilePage>;

 
  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
