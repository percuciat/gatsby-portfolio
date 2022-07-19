import React, { useEffect, useContext } from "react";
import App from "app";
import Header from "widgets/header/ui";
import Sidebar from "widgets/sidebar/ui";
import Footer from "widgets/footer/ui";
import Seo from "widgets/seo/ui";
import { ContextApp } from "stateManager/store";
import { setWindowSize } from "stateManager/actions";
import { useResizeWindow } from "hooks/useResizeWindow";

const LayoutMain = ({ seoData, children }) => {
  const {
    state: { isRu, isDark, isMenuOpen, widthScreen },
    dispatch,
  } = useContext(ContextApp);

  useEffect(() => {
    dispatch(setWindowSize(window.innerWidth));
  }, [dispatch]);

  useResizeWindow();

  return (
    <App>
      <>
        <Seo seoData={seoData} />
        <Header
          toggleSidebar={isMenuOpen}
          isDark={isDark}
          widthScreen={widthScreen}
          isRu={isRu}
          dispatch={dispatch}
        />
        {isMenuOpen && (
          <Sidebar
            toggleSidebar={isMenuOpen}
            isRu={isRu}
            isDark={isDark}
            dispatch={dispatch}
          />
        )}
        <main className={`${isDark ? "darkSecondary" : ""} main`}>
          {React.Children.map(children, (child) => {
            return React.cloneElement(child, { isRu, widthScreen });
          })}
        </main>
        <Footer isDark={isDark} isRu={isRu} />
      </>
    </App>
  );
};

export default LayoutMain;
