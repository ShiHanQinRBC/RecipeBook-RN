import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { Button, Divider, Layout, TopNavigation } from "@ui-kitten/components";

export const LoginScreen = ({ navigation }) => {
  const navigateDashboard = () => {
    navigation.navigate("Dashboard");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title="Recipe Book" alignment="center" />
      <Divider />
      <Layout
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Button onPress={navigateDashboard}>Login</Button>
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
  controlContainer: {
    borderRadius: 4,
    margin: 2,
    padding: 6,
    justifyContent: "center",
    backgroundColor: "#3366FF",
  },
});
