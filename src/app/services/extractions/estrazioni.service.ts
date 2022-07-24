import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Extraction } from 'src/app/models/extractionModel';
import { collection, doc, setDoc, getDocs } from "firebase/firestore"; 
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { Database, DatabaseReference, getDatabase,onValue,push,ref, remove, set} from 'firebase/database';
import { ItemServiceInterface } from 'src/app/modules/item/models/ItemServiceInterface';
import { ItemModelInterface } from 'src/app/modules/item/models/itemModelInterface';

@Injectable({
  providedIn: 'root'
})
export class ExtractionService implements ItemServiceInterface {
  reference= "extractions"
  db = getDatabase()
  extractions_list:Extraction[]
  _items: BehaviorSubject<Array<Extraction>> = new BehaviorSubject([])
  readonly items:Observable<Array<Extraction>> = this._items.asObservable()

  async loadDataAndPublish(){
  
   const extractionReference = ref(this.db,this.reference)
   
    onValue(extractionReference,(snapShot)=>{
      this.extractions_list = []
      snapShot.forEach((doc)=>{
        const extraction = new Extraction(doc.val()).setId(doc.key)
        this.extractions_list.push(extraction)
      })
    this._items.next(this.extractions_list)
    },(error)=>{
      console.log("errore",error)
    })
    
  }

  createItem(extraction:Extraction){
    const db = getDatabase()
    const extractionReference = ref(this.db,this.reference)
    return  push(extractionReference,extraction.serialize())
  }
  constructor() {
    this.loadDataAndPublish()
   }
  categoriesService?: ItemServiceInterface;
  suppliersService?: ItemServiceInterface;
  paymentsService?: ItemServiceInterface;
  items_list: ItemModelInterface[];
  itemsListRef: DatabaseReference;
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
    console.log("reference",reference)
    return remove(reference).then((result)=>{
      console.log("success",result)
    })
  }
  getEmptyItem(): ItemModelInterface {
    return new Extraction()
  }
}
