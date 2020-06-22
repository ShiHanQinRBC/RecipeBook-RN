import React from "react";
import { Dimensions, Image, SafeAreaView, StyleSheet } from "react-native";
import {
  Button,
  Divider,
  Icon,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
} from "@ui-kitten/components";
import { ScrollView } from "react-native-gesture-handler";

const BackIcon = (props) => <Icon {...props} name="arrow-back" />;

export const ViewPost = ({ navigation }) => {
  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <TopNavigation
          title="View Recipe"
          alignment="center"
          accessoryLeft={BackAction}
        />
        <Divider />
        <Layout
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Image
            style={styles.post}
            source={{
              uri:
                "https://scontent.cdninstagram.com/v/t51.2885-15/100955186_158607965797189_6778942453506911128_n.jpg?_nc_cat=111&_nc_sid=8ae9d6&_nc_ohc=oeU5qpvSks4AX8bLl_K&_nc_ht=scontent.cdninstagram.com&oh=760e78c980560ccd170a2a23c7f474f9&oe=5F0700E9",
            }}
          />
        </Layout>
        <Layout style={{ alignItems: "left" }}>
          <Text style={styles.section}> Ingredients</Text>
          <Text style={styles.section}>Equipment</Text>
          <Text style={styles.section}>Instructions</Text>
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
  post: {
    width: Dimensions.get("window").width - 30,
    height: Dimensions.get("window").width - 30,
  },
  button: {
    margin: 2,
  },
  section: {
    fontSize: 20,
    marginLeft: 15,
  },
});
