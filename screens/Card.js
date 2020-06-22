import React from "react";
import { Dimensions, Image, SafeAreaView, StyleSheet } from "react-native";
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
      <Layout style={styles.container}>
        <Text style={{ fontStyle: "italic", fontSize: 24 }}>XX/XX/XXXX</Text>
        <Image
          style={styles.post}
          source={{
            uri:
              "https://scontent.cdninstagram.com/v/t51.2885-15/100955186_158607965797189_6778942453506911128_n.jpg?_nc_cat=111&_nc_sid=8ae9d6&_nc_ohc=oeU5qpvSks4AX8bLl_K&_nc_ht=scontent.cdninstagram.com&oh=760e78c980560ccd170a2a23c7f474f9&oe=5F0700E9",
          }}
        />
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
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  post: {
    width: Dimensions.get("window").width - 30,
    height: Dimensions.get("window").width - 30,
  },
  button: {
    margin: 2,
    width: (Dimensions.get("window").width - 30) / 2,
  },
});
