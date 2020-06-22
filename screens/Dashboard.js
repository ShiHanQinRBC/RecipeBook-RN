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
import { ScrollView } from "react-native-gesture-handler";

const BackIcon = (props) => <Icon {...props} name="arrow-back" />;

export const DashboardScreen = ({ navigation }) => {
  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.scontainer}>
        <TopNavigation
          title="Dashboard"
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
          <Card navigation={navigation} />
          <Card navigation={navigation} />
          <Card navigation={navigation} />
          <Card navigation={navigation} />
          <Card navigation={navigation} />
          <Card navigation={navigation} />
          <Card navigation={navigation} />
          <Card navigation={navigation} />
          <Card navigation={navigation} />
        </Layout>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  scontainer: {
    flex: 1,
  },
  button: {
    margin: 2,
  },
});
