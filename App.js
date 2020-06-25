import React from "react";
import { StyleSheet, Text, View } from "react-native";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { default as theme } from "./theme.json";
import { AppNavigator } from "./screens/Navigation";
import { DashboardScreen } from "./screens/Dashboard";
import { Card } from "./screens/Card";
import base64 from "react-native-base64";

if (!global.btoa) {
  global.btoa = base64.encode;
}

if (!global.atob) {
  global.atob = base64.decode;
}

export default App = () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
      {/* <DashboardScreen /> */}
      <AppNavigator />
    </ApplicationProvider>
  </>
);
