import { TestBed } from '@angular/core/testing';
import firebase from 'firebase/compat/app';
import {configs} from '../../../configs/credentials'

import { UsersService } from './users.service';

describe('UsersService', () => {
  !firebase.apps.length ? firebase.initializeApp(configs.firebase) : firebase .app()
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsersService = TestBed.get(UsersService);
    expect(service).toBeTruthy();
  });
});
