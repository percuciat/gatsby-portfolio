import React from "react";
import { observer } from "mobx-react-lite";
import useGlobalStore from "shared/hooks/useGlobalStore";

const Title = ({ title, title_eng }) => {
  const { lang } = useGlobalStore();
  return (
    <div className="section-title">
      <h2 className="section-title__text">
        {lang.isRuLang ? title || "Default title" : title_eng}
      </h2>
    </div>
  );
};

export default observer(Title);
