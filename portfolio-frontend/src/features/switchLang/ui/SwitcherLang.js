import React, { useCallback } from "react";
import { Switcher } from "shared/ui";
import { observer } from "mobx-react-lite";

const SwitcherLang = () => {
  // globalUIStore.isRu ? "Сменить язык" : "Change language"
  // ${!globalUIStore.isRu && "active"
  return <Switcher customClass="switcher--lang" title="Сменить язык" />;
};

export default observer(SwitcherLang);
