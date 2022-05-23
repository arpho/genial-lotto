import { QuestionBase } from '../../dynamic-form/models/question-base';
import { QuestionProperties } from '../../dynamic-form/models/questionproperties';
import { Address } from '../../geolocation/models/Address';


export interface Addressproperties extends QuestionProperties<Address>{
    value:Address
}
export class AddressQuestion extends QuestionBase<Address>{
    controlType = 'address'
    type:Address;
    constructor(options:QuestionProperties<string>){
        super(options)
    }
}