import React, { useContext } from "react";
import { Context } from "./Store";

const UseTab = () => {
  const {
    store: { tab, tabs },
    actions: { setTab },
  } = useContext(Context);
  return [tab, (getTabs = tabs), setTab];
};

export default UseTab;
