import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RoleModel } from './privilegesLevelModel';

describe('testing PrivilegesLevelModel', () => {
  const sviluppatore = new RoleModel({
    value: 1,
    key: 'sviluppatore'
  });

  const abilitato = new RoleModel({
    value: 3,
    key: 'test abilitato'
  });
  it('sviluppatore is allowed at abilitato\'s level', () => {
    const userLevel = new RoleModel({
      value: 1,
      key: 'sviluppatore'
    });

    expect(abilitato.isAllowed(abilitato)).toBe(true);
    expect(sviluppatore.isAllowed(sviluppatore)).toBe(true);
  });
  it('abilitato is not allowed at sviluppatore\'s level', () => {
    expect(abilitato.isAllowed(sviluppatore)).toBe(false);
  });
});
