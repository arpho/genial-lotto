import { TestBed } from '@angular/core/testing';
import firebase from 'firebase/compat/app';
import {credentials} from '../../../configs/credentials'

import { UsersService } from './users.service';

describe('UsersService', () => {
  !firebase.apps.length ? firebase.initializeApp(credentials.firebase) : firebase .app()
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsersService = TestBed.get(UsersService);
    expect(service).toBeTruthy();
  });
});
