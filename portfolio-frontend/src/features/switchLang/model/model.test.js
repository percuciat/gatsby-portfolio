import { LangStore } from "./index";

describe("Lang Store", () => {
  it("smoke", () => {
    const store = new LangStore();

    expect(store.isRuLang).not.toBeUndefined();
    expect(store.isRuLang).toBe(true);

    store.toggleRuLang();

    expect(store.isRuLang).not.toBeUndefined();
    expect(store.isRuLang).toBe(false);

    store.toggleRuLang();

    expect(store.isRuLang).not.toBeUndefined();
    expect(store.isRuLang).toBe(true);
  
  });
});
