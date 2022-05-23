
// tslint:disable:semicolon
import * as firebase from 'firebase/app';
import { ItemModelInterface } from './itemModelInterface';
import { Observable, BehaviorSubject } from 'rxjs';
import { Database, DatabaseReference } from 'firebase/database';
export interface ItemServiceInterface {
// extra service for complex models
categoriesService?: ItemServiceInterface
suppliersService?: ItemServiceInterface
paymentsService?: ItemServiceInterface
reference:string //it s the reference name in the realtime database
// items?: Observable<Array<ItemModelInterface>>
   _items: BehaviorSubject<Array<ItemModelInterface>> // = new BehaviorSubject([])
   items_list: Array<ItemModelInterface> // = []
   db:Database
   itemsListRef:DatabaseReference
   readonly items:Observable<Array<ItemModelInterface>>

    /**get one item from firebase
     * @param key:string
     * @returns firebase.database reference
     * @deprecated
     */
    getItem(key: string,next:(item?)=>void):void;

    /**modifica un item su firebase
     * @param item: ItemModelInterface the item to update
     * @returns void
     */
    updateItem(item: ItemModelInterface);
    /** delete an item on firebase database
     * @param key: string the item's key
     */
    deleteItem(key: string);

    /** return a void item of the type handled by the service */
    getEmptyItem(): ItemModelInterface;
    /**crea un item in firebase
     *
     */
    createItem(item: ItemModelInterface);
    loadDataAndPublish(): void;

}
