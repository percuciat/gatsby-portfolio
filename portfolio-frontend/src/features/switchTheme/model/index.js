import { action, makeAutoObservable, observable } from "mobx";

export class ThemeStore {
  isDarkMode = false;
  constructor() {
    makeAutoObservable(this);
  }
  toggleDarkMode = () => {
    this.isDarkMode = !this.isDarkMode;
    console.log("theme--click");
  }
};
