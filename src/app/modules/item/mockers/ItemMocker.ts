import { Genere, ItemModelInterface } from "../models/itemModelInterface";
import { ItemServiceInterface } from "../models/ItemServiceInterface";
import { QuickAction } from "../models/QuickAction";
import { Value } from "../models/value";

export class ItemMocker implements ItemModelInterface{
  title: string;
  note?: string;
  key: string;
  quickActions?: QuickAction[];
  archived?: boolean;
  service?: ItemServiceInterface;
  getTitle(): Value {
    throw new Error("Method not implemented.");
  }
  getCountingText(): { singular: string; plural: string; } {
    return {singular:"uno",plural:"due"}
  }
  getNote(): Value {
    throw new Error("Method not implemented.");
  }
  build?(item: {}) {
    throw new Error("Method not implemented.");
  }
  load?(next?: () => void) {
    throw new Error("Method not implemented.");
  }
  isArchived?(): boolean {
    throw new Error("Method not implemented.");
  }
  archiveItem?(b: boolean) {
    throw new Error("Method not implemented.");
  }
  isArchivable?(): boolean {
    throw new Error("Method not implemented.");
  }
  getValue2(): Value {
    throw new Error("Method not implemented.");
  }
  getValue3(): Value {
    throw new Error("Method not implemented.");
  }
  getValue4(): Value {
    throw new Error("Method not implemented.");
  }
  setKey?(key: string): ItemModelInterface {
    throw new Error("Method not implemented.");
  }
  getEditPopup(item?: ItemModelInterface, service?: ItemServiceInterface) {
    throw new Error("Method not implemented.");
  }
  initialize(item: {}): ItemModelInterface {
    throw new Error("Method not implemented.");
  }
  getAggregate(): Value {
    throw new Error("Method not implemented.");
  }
  aggregateAction?() {
    throw new Error("Method not implemented.");
  }
  hasQuickActions?(): boolean {
    throw new Error("Method not implemented.");
  }
  serialize() {
    throw new Error("Method not implemented.");
  }
  getElement(): { element: string; genere: Genere; } {
    throw new Error("Method not implemented.");
  }

}