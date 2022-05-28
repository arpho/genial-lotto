import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EstrazioniService } from '../services/extractions/estrazioni.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  constructor(private activatedRoute: ActivatedRoute,public estrazioni:EstrazioniService) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.estrazioni.extractions.subscribe((items)=>{
      console.log("got items",items.length)
    })
  }

}
