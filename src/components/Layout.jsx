import React from "react"
import { Header, Sidebar, Footer } from "../components"
import { ContextApp } from "../stateManager/store";

const Layout = ({children}) => {

  const {state: {isRu, isDark, isMenuOpen}, dispatch} = React.useContext(ContextApp);

  return (
    <div className="wrapperGlobal">
      <Header toggleSidebar={isMenuOpen}
              isDark={isDark}
              dispatch={dispatch}/>
      {
        isMenuOpen
          ? <Sidebar toggleSidebar={isMenuOpen}
                     dispatch={dispatch}/>
          : <></>
      }
      <main className={`${isDark ? 'darkSecondary' : ''} main`}>
        {children}
      </main>
      <Footer isDark={isDark}/>
    </div>
  )
};

export default Layout
