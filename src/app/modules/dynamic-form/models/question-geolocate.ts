import { QuestionBase } from './question-base';
import { QuestionProperties } from './questionproperties';

export class GeoLocateQuestion extends QuestionBase<string> {
    controlType = 'geobox';
    type: string;

    constructor(options: QuestionProperties<Coordinates>| { key: string, label: string }) {
        super(options);
        // tslint:disable-next-line: no-string-literal
        this.type = options['type'] || '';
    }
}
