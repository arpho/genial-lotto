// tslint:disable-next-line: quotemark
import { ComboValue } from "../../dynamic-form/models/ComboValueinterface";
export class RoleModel implements ComboValue {
  public value: number|string;
  public key: string;

  constructor(level: { key: string; value: number|string }) {
    this.value = level.value;
    this.key = level.key;
  }
  isAllowed(Level: RoleModel) {
    return this.value <= Level.value;
  }
}
