import { makeAutoObservable } from "mobx";

export class ThemeStore {
  isDarkMode = false;
  constructor() {
    makeAutoObservable(this);
  }
  toggleDarkMode = () => {
    this.isDarkMode = !this.isDarkMode;
  }
};
