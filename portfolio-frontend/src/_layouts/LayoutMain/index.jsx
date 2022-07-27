import React, { useEffect, useContext } from "react";
import App from "app";

import { Header, Sidebar, Footer, Seo } from "widgets";
/* import { ContextApp } from "stateManager/store";
import { setWindowSize } from "stateManager/actions"; */
import { useResizeWindow } from "shared/hooks/useResizeWindow";

import { GlobalUiStore } from "app/model";
import { observer } from "mobx-react-lite";

const LayoutMain = ({ seoData, children }) => {
  /*  const {
    state: { isRu, isDark, isMenuOpen, widthScreen },
    dispatch,
  } = useContext(ContextApp);

  useEffect(() => {
    dispatch(setWindowSize(window.innerWidth));
  }, [dispatch]);

  useResizeWindow(); */

  return (
    <App>
      <>
        <Seo seoData={seoData} />
        <Header
          globalUIStore={GlobalUiStore}
          /* toggleSidebar={isMenuOpen} */
          /*  isDark={isDark} */
          /* widthScreen={widthScreen} */
          /*  isRu={isRu}
          dispatch={dispatch} */
        />
        {/*  {isMenuOpen && (
          <Sidebar
            toggleSidebar={isMenuOpen} 
            isRu={isRu}
            isDark={isDark}
            dispatch={dispatch} 
          />  ${isDark ? "darkSecondary" : "" }
        )} */}
        <main className={` main`}>
          {children}
          {/*  {React.Children.map(children, (child) => {
            return React.cloneElement(child, { });
          })}  */}
        </main>
        <Footer />
      </>
    </App>
  );
};

export default observer(LayoutMain);
