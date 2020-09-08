import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import { StatusBar } from "expo-status-bar";
import UseTab from "../../hooks/Tab";

const HomeTab = (props) => {
  const [tab, getTabs, setTab] = UseTab();
  const [text] = useState("Home");

  const changeTab = () => setTab("settings");

  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <StatusBar style="auto" />
      <Button title="change tab" onPress={changeTab} />
    </View>
  );
};

export default HomeTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(255,0,0)",
    alignItems: "center",
    justifyContent: "center",
  },
});
