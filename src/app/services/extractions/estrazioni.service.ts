import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Extraction } from 'src/app/models/extractionModel';

@Injectable({
  providedIn: 'root'
})
export class EstrazioniService {
  collection= "extractions"

  extractions_list:Extraction[]
  _extractions: BehaviorSubject<Array<Extraction>> = new BehaviorSubject([])
  readonly extractions:Observable<Array<Extraction>> = this._extractions.asObservable()

  constructor() { }
}
