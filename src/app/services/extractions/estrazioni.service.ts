import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Extraction } from 'src/app/models/extractionModel';
import { collection, doc, setDoc, getDocs } from "firebase/firestore"; 
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

@Injectable({
  providedIn: 'root'
})
export class EstrazioniService {
  collection= "extractions"
  extractions_list:Extraction[]
  _extractions: BehaviorSubject<Array<Extraction>> = new BehaviorSubject([])
  readonly extractions:Observable<Array<Extraction>> = this._extractions.asObservable()

  async loadAndPublish(){
   const db = getFirestore()
   const snapShot = await getDocs(collection(db,this.collection));
      this.extractions_list = []
    snapShot.forEach((doc)=>{
      const extraction = new Extraction(doc.data()).setId(doc.id)
      this.extractions_list.push(extraction)
    })
    this._extractions.next(this.extractions_list)
  }
  constructor() {
    this.loadAndPublish()
   }
}
