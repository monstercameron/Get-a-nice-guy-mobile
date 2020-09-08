import React from "react";
import { injectContext } from "../../hooks/Store";
import UseTab from "../../hooks/Tab";
import Header from "../Header";

const App = () => {
  const [tab, getTabs] = UseTab();
  const displayTab = () => getTabs[tab]();
  return (
    <>
      <Header title={tab} />
      {displayTab()}
    </>
  );
};

export default injectContext(App);
