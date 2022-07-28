import { ThemeStore } from "./index";

describe("Theme Store", () => {
  it("smoke", () => {
    const store = new ThemeStore();

    expect(store.isDarkMode).not.toBeUndefined();
    expect(store.isDarkMode).toBe(false);

    store.toggleDarkMode();

    expect(store.isDarkMode).not.toBeUndefined();
    expect(store.isDarkMode).toBe(true);

    store.toggleDarkMode();

    expect(store.isDarkMode).not.toBeUndefined();
    expect(store.isDarkMode).toBe(false);
  });
});
