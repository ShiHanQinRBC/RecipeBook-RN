import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import {
  Button,
  Divider,
  Icon,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
} from "@ui-kitten/components";
import { Card } from "./Card";

const BackIcon = (props) => <Icon {...props} name="arrow-back" />;

export const DashboardScreen = ({ navigation }) => {
  const navigateBack = () => {
    navigation.goBack();
  };

  const navigateEdit = () => {
    navigation.navigate("EditForm");
  };

  const navigateView = () => {
    navigation.navigate("ViewPost");
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation
        title="Recipe Book"
        alignment="center"
        accessoryLeft={BackAction}
      />
      <Divider />
      <Layout
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Card navigation={navigation} />
        <Card navigation={navigation} />
        <Card navigation={navigation} />
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  button: {
    margin: 2,
  },
});
