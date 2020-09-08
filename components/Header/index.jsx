import React from "react";
import { Header } from "react-native-elements";

const HeaderComp = (props) => {
  return (
    <Header
      leftComponent={{ icon: "menu", color: "#fff" }}
      centerComponent={{ text: props.title || "MY TITLE", style: { color: "#fff" } }}
      rightComponent={{ icon: "home", color: "#fff" }}
    />
  );
};

export default HeaderComp;
