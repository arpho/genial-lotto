// tslint:disable:semicolon
import { ComboValue } from '../../dynamic-form/models/ComboValueinterface';

export class Entities implements ComboValue {
    public value: string;
    public key: string;
    constructor(args: { key: string, value: string }) {
        this.key = args.key
        this.value = args.value
    }
}