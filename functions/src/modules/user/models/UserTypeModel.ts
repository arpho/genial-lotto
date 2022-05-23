import { ComboValue } from '../../dynamic-form/models/ComboValueinterface'
export class UserTpeModedl implements ComboValue {
    key: string;
    value: string | number;
    constructor(type: { key: string; value: number | string }) {
        this.key = type.key
        this.value = type.value
    }

}