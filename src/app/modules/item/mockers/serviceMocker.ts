import { Database, DatabaseReference } from "firebase/database";
import { BehaviorSubject, Observable } from "rxjs";
import { ItemModelInterface } from "../models/itemModelInterface";
import { ItemServiceInterface } from "../models/ItemServiceInterface";
import { ItemMocker } from "./ItemMocker";

export class  serviceMocker implements ItemServiceInterface{
  categoriesService?: ItemServiceInterface;
  suppliersService?: ItemServiceInterface;
  paymentsService?: ItemServiceInterface;
  reference: string;
  _items: BehaviorSubject<ItemModelInterface[]>= new BehaviorSubject([])
  items_list: ItemModelInterface[];
  db: Database;
  itemsListRef: DatabaseReference;
  items: Observable<ItemModelInterface[]>;
  getItem(key: string, next: (item?: any) => void): void {
    throw new Error("Method not implemented.");
  }
  updateItem(item: ItemModelInterface) {
    throw new Error("Method not implemented.");
  }
  deleteItem(key: string) {
    throw new Error("Method not implemented.");
  }
  getEmptyItem(): ItemModelInterface {
    return new ItemMocker()
  }
  createItem(item: ItemModelInterface) {
    throw new Error("Method not implemented.");
  }
  loadDataAndPublish(): void {
    throw new Error("Method not implemented.");
  }
  
}