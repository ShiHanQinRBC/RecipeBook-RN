import React from "react";
//import { StyleSheet, Text, View } from "react-native";
import * as eva from "@eva-design/eva";
import {
  ApplicationProvider,
  Layout,
  Text,
  IconRegistry,
  Button,
  Icon,
} from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { default as theme } from "./theme.json";
import { AppNavigator } from "./screens/Navigation";
import { DashboardScreen } from "./screens/Dashboard";
import { Card } from "./screens/Card";

export default () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
      {/* <DashboardScreen /> */}
      <AppNavigator />
    </ApplicationProvider>
  </>
);
