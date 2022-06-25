import { Injectable } from '@angular/core';
import { Database, DatabaseReference, getDatabase, onValue, ref } from 'firebase/database';
import { BehaviorSubject, Observable } from 'rxjs';
import { configs } from 'src/app/configs/credentials';
import { Customer } from 'src/app/models/Customer';
import { MyFirebaseHelper } from 'src/app/modules/helpers/createFirebaseApp';
import { ItemModelInterface } from 'src/app/modules/item/models/itemModelInterface';
import { ItemServiceInterface } from 'src/app/modules/item/models/ItemServiceInterface';
import { AuthService } from 'src/app/modules/user/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CustomersService implements ItemServiceInterface {
  categoriesService?: ItemServiceInterface;
  suppliersService?: ItemServiceInterface;
  paymentsService?: ItemServiceInterface;
  constructor(public authService: AuthService) {
    new MyFirebaseHelper().createFirebaseApp(configs.firebase)
    this.reference = 'userProfile'
    this.db = getDatabase()
    this.itemsListRef = ref(this.db, this.reference)
    this.loadDataAndPublish(this.publishItems)
  }

  publishItems(lista: Customer[]) {// must stay inside onValue to update data evry time there is an update

    this._items.next(lista)

  }


  reference: string = "userProfile"
  _items: BehaviorSubject<ItemModelInterface[]>= new BehaviorSubject([])
  items_list: Customer[];
  db: Database;
  itemsListRef: DatabaseReference;
  readonly items: Observable<ItemModelInterface[]>= this._items.asObservable()
  getItem(key: string, next: (item?: any) => void): void {
    throw new Error('Method not implemented.');
  }
  updateItem(item: ItemModelInterface) {
    throw new Error('Method not implemented.');
  }
  deleteItem(key: string) {
    throw new Error('Method not implemented.');
  }
  getEmptyItem(): ItemModelInterface {
   return new Customer()
  }
  createItem(item: ItemModelInterface) {
    throw new Error('Method not implemented.');
  }
  loadDataAndPublish(next?): void {
    onValue(this.itemsListRef, (snapshot) => {


      this.items_list = []
      snapshot.forEach(e => {
        const item = new Customer(e.val())

        this.items_list.push(item)


      })
      this.publishItems(this.items_list)
    })
  }
}
