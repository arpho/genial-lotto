import { ItemModelInterface } from './itemModelInterface';

type FilterType = 'text' | 'combo' | 'list';
export class ItemFilterOPtions {
    label: string;
    filter: (item: ItemModelInterface) => boolean;
    filterFactory: (match: string) => (item: ItemModelInterface) => boolean;
    filterType: FilterType;
    values: { title: string, key: string }[];
    constructor(label: string, filterType: FilterType) {
        this.label = label;
        this.filterType = filterType;
        this.values = [];

    }
}
