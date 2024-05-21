import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import "expo-dev-client";

import Main from "./Main";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Main />
    </>
  );
}
