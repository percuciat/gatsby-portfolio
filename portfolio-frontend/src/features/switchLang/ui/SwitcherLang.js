import React, { useCallback } from "react";
import { observer } from "mobx-react-lite";
import { Switcher } from "shared/ui";
import useGlobalStore from "shared/hooks/useGlobalStore";

const SwitcherLang = () => {
  const { lang } = useGlobalStore();
  return (
    <Switcher
      customClass="switcher--lang"
      title={lang.isRuLang ? "Сменить язык" : "Change language"}
      handler={lang.toggleRuLang}
      activeClass={!lang.isRuLang && "active"}
    />
  );
};

export default observer(SwitcherLang);
