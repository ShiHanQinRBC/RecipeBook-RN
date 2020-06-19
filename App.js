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

const FacebookIcon = (props) => <Icon name="facebook" {...props} />;

const HomeScreen = () => (
  <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text category="h1">HOME</Text>
    <Button accessoryLeft={FacebookIcon}>Login with Facebook</Button>
  </Layout>
);

export default () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
      {/* <HomeScreen /> */}
      <AppNavigator />
    </ApplicationProvider>
  </>
);
