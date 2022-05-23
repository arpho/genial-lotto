import { Injectable } from "@angular/core";
import { DatabaseReference, getDatabase, ref, set } from "firebase/database";
import { BehaviorSubject, Observable } from "rxjs";
import { TrackPosition } from "../../models/tracking";

@Injectable({
  providedIn: "root"
})
export class TrackService {
	_items: BehaviorSubject<Array<TrackPosition>> = new BehaviorSubject([]);
	readonly items: Observable<Array<TrackPosition>> = this._items.asObservable()
	items_list: Array<TrackPosition> = []
	reference = "tracking"
    db = getDatabase()
    itemsListRef = ref(this.db, this.reference)

	publishItems(lista: TrackPosition[]) {// must stay inside onValue to update data evry time there is an update

		this._items.next(lista)
	
	  }


  updateItem(item: TrackPosition) {
    const reference = ref(this.db, `${this.reference}/${item.driverKey}`)
   return  set(reference, item.serialize())
  }

  constructor() { }
}
