import { action, observable, makeAutoObservable } from "mobx";

export class LangStore {
  isRuLang = true;
  constructor() {
    makeAutoObservable(this);
  }
  toggleRuLang = () => {
    this.isRuLang = !this.isRuLang;
    console.log("change--RuLang");
  };
}
