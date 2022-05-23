import { ItemModelInterface } from './itemModelInterface';

export interface ItemControllerInterface {
    ItemsList: Array<ItemModelInterface>;
    filterLabel: string
    filterString: string;
    filterFields: any;
    filterFunction: (item: ItemModelInterface) => boolean;
    filter(filterParams:any)

}