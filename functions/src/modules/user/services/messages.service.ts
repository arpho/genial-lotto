import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class MessagesService {
  private messages: {};

  constructor() {
    this.messages = {};
  }

  setMessage(data: { key: string; message: string }) {
    this.messages[data.key] = data.message;
  }

  getMessage(key: string) {
    return this.messages[key] || "";
  }
}
