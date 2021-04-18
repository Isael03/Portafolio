import { bool } from "prop-types";
import { createContext, useState, useEffect, FunctionComponent } from "react";

const PortfolioContext = createContext(null);
export default PortfolioContext;

export const PortfolioProvider: FunctionComponent = (props) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (window.localStorage.getItem("darkMode") === null) {
      window.localStorage.setItem("darkMode", darkMode.toString());
    }
  });

  const handleChangeDarkMode = () => {
    let localDarkMode: boolean = JSON.parse(
      window.localStorage.getItem("darkMode")
    );
    setDarkMode(!localDarkMode);
    window.localStorage.setItem("darkMode", (!localDarkMode).toString());
  };

  return (
    <PortfolioContext.Provider
      value={{
        darkMode,
        handleChangeDarkMode,
      }}
    >
      {props.children}
    </PortfolioContext.Provider>
  );
};
