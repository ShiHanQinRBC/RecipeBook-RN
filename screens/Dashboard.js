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

export const DashboardScreen = ({ route, navigation }) => {
  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );

  const displayCards = (username, ids, token) => {
    //console.log(ids);
    const cards = [];
    for (let i = 0; i < ids.length; i++) {
      cards.push(
        <Card
          key={ids[i].id}
          navigation={navigation}
          username={username}
          mediaId={ids[i].id}
          token={token}
        />
      );
    }
    return cards;
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#40314f" }}>
      <ScrollView style={styles.scontainer}>
        <TopNavigation
          title="Dashboard"
          alignment="center"
          accessoryLeft={BackAction}
          backgroundColor="#40314f"
        />
        <Layout
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          {displayCards(
            route.params.username,
            route.params.mediaIds,
            route.params.token
          )}
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
    backgroundColor: "#40314f",
  },
  button: {
    margin: 2,
  },
});
