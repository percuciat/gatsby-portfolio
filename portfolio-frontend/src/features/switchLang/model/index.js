import { action, decorate, observable } from "mobx";

const LangStore = {
  isRuLang: true,

  toggleRuLang() {
    this.isRuLang = !this.isRuLang;
  },
};

decorate(LangStore, {
  isRuLang: observable,
  toggleRuLang: action,
});

export default LangStore;
