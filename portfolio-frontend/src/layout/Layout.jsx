import React from "react";
import { Header, Sidebar, Footer } from "components";
import { Seo } from "Seo";
import { ContextApp } from "stateManager/store";
import { setWindowSize } from "stateManager/actions";
import { useResizeWindow } from "hooks/useResizeWindow";
import "styled/global.scss";
import "normalize.css";

const Layout = ({ seoData, children }) => {
  const {
    state: { isRu, isDark, isMenuOpen, widthScreen },
    dispatch,
  } = React.useContext(ContextApp);

  React.useEffect(() => {
    dispatch(setWindowSize(window.innerWidth));
  }, []);

  useResizeWindow();

  return (
    <div className="wrapperGlobal">
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
    </div>
  );
};

export default Layout;
