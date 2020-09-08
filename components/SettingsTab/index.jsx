import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import { StatusBar } from "expo-status-bar";
import UseTab from "../../hooks/Tab";

const SettingTab = (props) => {
  const [tab, getTabs, setTab] = UseTab();
  const [text] = useState("settings");

  const changeTab = () => setTab("home");

  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <StatusBar style="auto" />
      <Button title="change tab" onPress={changeTab} />
    </View>
  );
};

export default SettingTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
