import React from "react";
import { ThemeProvider } from "react-native-elements";
import AppWithContext from "./components/App/index";

export default function App() {
  return (
    <ThemeProvider>
      <AppWithContext />
    </ThemeProvider>
  );
}
