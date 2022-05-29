import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Extraction } from 'src/app/models/extractionModel';
import { collection, doc, setDoc, getDocs } from "firebase/firestore"; 
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase,onValue,ref} from 'firebase/database';

@Injectable({
  providedIn: 'root'
})
export class EstrazioniService {
  collection= "extractions"
  extractions_list:Extraction[]
  _extractions: BehaviorSubject<Array<Extraction>> = new BehaviorSubject([])
  readonly extractions:Observable<Array<Extraction>> = this._extractions.asObservable()

  async loadAndPublish(){
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
  constructor() {
    this.loadAndPublish()
   }
}
