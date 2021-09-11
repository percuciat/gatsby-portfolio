import React from "react";
import { Header, Sidebar, Footer } from "../components";
import { Seo } from "../Seo";
import { ContextApp } from "../stateManager/store";
import "../styled/global.scss";
import "normalize.css";

const Layout = ({seoData, children}) => {
  const {state: {isRu, isDark, isMenuOpen}, dispatch} = React.useContext(ContextApp);

  return (
    <div className="wrapperGlobal">
      <Seo seoData={seoData}/>
      <Header toggleSidebar={isMenuOpen}
              isDark={isDark}
              isRu={isRu}
              dispatch={dispatch}/>
      {isMenuOpen && <Sidebar toggleSidebar={isMenuOpen} isRu={isRu}
                              isDark={isDark} dispatch={dispatch}/>}
      <main className={`${isDark ? 'darkSecondary' : ''} main`}>
        {React.Children.map(children, child => {
          return React.cloneElement(child, { isRu })
        })}
      </main>
      <Footer isDark={isDark}
              isRu={isRu}/>
    </div>
  )
};

export default Layout
