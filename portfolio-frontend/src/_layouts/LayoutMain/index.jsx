import React, { useEffect, useContext } from "react";
import { observer } from "mobx-react-lite";
import App from "app";

import { Header, Sidebar, Footer, Seo } from "widgets";
import { useResizeWindow } from "shared/hooks/useResizeWindow";

import useGlobalStore from "shared/hooks/useGlobalStore";

const LayoutMain = ({ seoData, children }) => {
  const { theme } = useGlobalStore();
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
          />  
        )} */}
        <main className={`${theme.isDarkMode ? "darkSecondary" : ""} main`}>
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
