import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Button, Divider, Layout, Text } from "@ui-kitten/components";

export const Card = ({ navigation }) => {
  const navigateEdit = () => {
    navigation.navigate("EditForm");
  };

  const navigateView = () => {
    navigation.navigate("ViewPost");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Divider />
      <Layout
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Text category="h1">Card</Text>
        <Button
          style={styles.button}
          appearance="outline"
          status="primary"
          onPress={navigateEdit}
        >
          Edit Recipe
        </Button>
        <Button
          style={styles.button}
          appearance="outline"
          status="primary"
          onPress={navigateView}
        >
          View Recipe
        </Button>
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
