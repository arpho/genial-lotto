import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Extraction } from 'src/app/models/extractionModel';
import { collection, doc, setDoc, getDocs } from "firebase/firestore"; 
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { Database, DatabaseReference, getDatabase,onValue,push,ref, set} from 'firebase/database';
import { ItemServiceInterface } from 'src/app/modules/item/models/ItemServiceInterface';
import { ItemModelInterface } from 'src/app/modules/item/models/itemModelInterface';

@Injectable({
  providedIn: 'root'
})
export class ExtractionService implements ItemServiceInterface {
  collection= "extractions"
  extractions_list:Extraction[]
  _extractions: BehaviorSubject<Array<Extraction>> = new BehaviorSubject([])
  readonly extractions:Observable<Array<Extraction>> = this._extractions.asObservable()

  async loadDataAndPublish(){
   const db = getDatabase()
   const extractionReference = ref(db,this.collection)
   
    onValue(extractionReference,(snapShot)=>{
      this.extractions_list = []
      snapShot.forEach((doc)=>{
        const extraction = new Extraction(doc.val()).setId(doc.key)
        this.extractions_list.push(extraction)
      })
    this._extractions.next(this.extractions_list)
    })
    
  }

  createItem(extraction:Extraction){
    const db = getDatabase()
    const extractionReference = ref(db,this.collection)
    return  push(extractionReference,extraction.serialize())
  }
  constructor() {
    this.loadDataAndPublish()
   }
  categoriesService?: ItemServiceInterface;
  suppliersService?: ItemServiceInterface;
  paymentsService?: ItemServiceInterface;
  reference: string;
  _items: BehaviorSubject<ItemModelInterface[]>;
  items_list: ItemModelInterface[];
  db: Database;
  itemsListRef: DatabaseReference;
  items: Observable<ItemModelInterface[]>;
  getItem(key: string, next: (item?: any) => void): void {
    const customerRef = ref(this.db, `${this.reference}/${key}`)
    onValue(customerRef, (item => {
      next(item.val())
    }))
  }
  updateItem(item: ItemModelInterface) {
    const reference = ref(this.db, `${this.reference}/${item.key}`)
   return  set(reference, item.serialize())
  }
  deleteItem(key: string) {
    const reference = ref(this.db, `${this.reference}/${key}`)
    return set(reference, null)
  }
  getEmptyItem(): ItemModelInterface {
    return new Extraction()
  }
}
