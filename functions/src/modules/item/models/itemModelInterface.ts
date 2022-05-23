// tslint: disable:semicolon
import { Value } from './value';
import { ItemServiceInterface } from './ItemServiceInterface';
import { AlertOptions, Page } from '@ionic/core';
import { ItemFilterOPtions } from './ItemFIlterOptions';
import { QuickAction } from './QuickAction';
import { Component } from '@angular/compiler/src/core';

export type Genere = 'o' | 'a';

export interface ItemModelInterface {
  title: string;
  note?: string;
  key: string;
  quickActions?: Array<QuickAction>;
  archived?: boolean;
  service?: ItemServiceInterface;
  getTitle(): Value;
  getCountingText(): {singular:string,plural:string}; // is the text shown on the countarea
  getNote(): Value;
  build?(item: {});
  load?(next?: () => void); // load the item from firebase
  isArchived?(): boolean;
  archiveItem?(b: boolean);
  isArchivable?(): boolean;
  getValue2(): Value;
  getValue3(): Value;
  getValue4(): Value;
  setKey?(key:string):ItemModelInterface
  getEditPopup(item?: ItemModelInterface, service?: ItemServiceInterface);
  initialize(item:{}):ItemModelInterface
  // tslint:disable-next-line: jsdoc-format
  /**ritorna l'etichetta e il valore da visualizzare del campo aggregato **/
  getAggregate(): Value;
  aggregateAction?(): any | void;
  hasQuickActions?(): boolean;
  serialize /*
  serialize the model for storing in firebase
  */();
  getElement(): { element: string; genere: Genere };

  /**ritorna il nome del tipo di elemento per esempio scuola 
   * @returns {element:string,genere:'o'|'a'}
   */
}
