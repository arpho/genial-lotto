// tslint:disable:semicolon
import { ItemModelInterface } from '../../item/models/itemModelInterface';

export interface QuestionProperties<T> {
    value?: T | any;
    key: string;
    label: string;
    required?: boolean;
    order?: number;
    retypePassword?:boolean
    type?: string
    controlType?: string;
    disabled?:boolean;
    filterFunction?: (value: ItemModelInterface | string, item?: ItemModelInterface | any) => boolean
}
