import { Component, OnInit } from '@angular/core';
import { ItemMocker } from 'src/app/modules/item/mockers/ItemMocker';
import { ItemModelInterface } from 'src/app/modules/item/models/itemModelInterface';
import { ExtractionService } from 'src/app/services/extractions/estrazioni.service';
import { AddExtractionPage } from '../../modals/add-extraction/add-extraction.page';

@Component({
  selector: 'app-browse-extractions',
  templateUrl: './browse-extractions.page.html',
  styleUrls: ['./browse-extractions.page.scss'],
})
export class BrowseExtractionsPage implements OnInit {

  editModalPage = AddExtractionPage
  createModalPage = AddExtractionPage
  filterFunction = (item:ItemModelInterface)=>{
    return true
  }

  constructor(public service:ExtractionService) { }

  ngOnInit() {
  }

}
