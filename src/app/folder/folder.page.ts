import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Extraction } from '../models/extractionModel';
import { EstrazioniService } from '../services/extractions/estrazioni.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  showSpinner= true
  weels:string[] = []
  dateEstrazioni:string[]=[]

  constructor(private activatedRoute: ActivatedRoute,public estrazioni:EstrazioniService) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.estrazioni.extractions.subscribe((items)=>{
      this.showSpinner= items.length ==0
      console.log("got items",items.length)
      items.sort((a:Extraction,b:Extraction)=>{
        return a._dateInmsec-b._dateInmsec// ordinamento crescente dal più vecchio al più recente
      }).forEach((e:Extraction)=>{
        this.weels.push(e.weel)
        this.weels =  Array.from( new Set(this.weels))
        this.dateEstrazioni.push(e.date)
        this.dateEstrazioni= Array.from(new Set(this.dateEstrazioni))
      })
      console.log("ruote",this.weels)
      console.log("date",this.dateEstrazioni.length)
    
    })


  }

}
