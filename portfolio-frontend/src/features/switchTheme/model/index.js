import { action, decorate, observable } from "mobx";

const ThemeStore = {
  isDarkMode: false,

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
  },
};

decorate(ThemeStore, {
  isDarkMode: observable,
  toggleDarkMode: action,
});

export default ThemeStore;
