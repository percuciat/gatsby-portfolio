import React from "react";
import { observer } from "mobx-react-lite";

import App from "app";
import { Header, Footer, Seo } from "widgets";

import useGlobalStore from "shared/hooks/useGlobalStore";

const LayoutMain = ({ seoData, children }) => {
  const { theme } = useGlobalStore();

  return (
    <App>
      <>
        <Seo seoData={seoData} />
        <Header />
        <main className={`${theme.isDarkMode ? "darkSecondary" : ""} main`}>
          {children}
        </main>
        <Footer />
      </>
    </App>
  );
};

export default observer(LayoutMain);
