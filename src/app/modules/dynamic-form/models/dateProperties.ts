import { DateModel } from "../../user/models/birthDateModel";
import { QuestionProperties } from "./questionproperties";

export interface DateProperties extends QuestionProperties<DateModel> {
    "presentation"?: 'date' | 'time' | 'date-time' | 'trime-date',
    "isDateEnabled"?:(date:string)=> boolean
}