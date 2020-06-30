import React, { useState, useEffect } from "react";
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
import { db } from "../services/Firebase";

const BackIcon = (props) => <Icon {...props} name="arrow-back" />;

export const ViewPost = ({ route, navigation }) => {
  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );

  const [ingredients, setIngredients] = useState("no ingredients yet");
  const [equipment, setEquipment] = useState("no equipment yet");
  const [instructions, setInstructions] = useState("no instructions yet");

  const getInfo = (info) => {
    db.collection("recipes")
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          if (doc.data()["id"] === route.params.mediaId) {
            if (info === "ingredients") {
              setIngredients(doc.data()[info].toString());
            } else if (info === "equipment") {
              setEquipment(doc.data()[info].toString());
            } else {
              setInstructions(doc.data()[info]);
            }
          }
        });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getInfo("ingredients");
    getInfo("equipment");
    getInfo("instructions");
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#40314f" }}>
      <ScrollView>
        <TopNavigation
          title="View Recipe"
          alignment="center"
          accessoryLeft={BackAction}
          style={{ backgroundColor: "#40314f" }}
        />
        <Divider />
        <Layout
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#40314f",
          }}
        >
          <Image
            style={styles.post}
            source={{
              uri: route.params.picUrl,
              //"https://scontent.cdninstagram.com/v/t51.2885-15/100955186_158607965797189_6778942453506911128_n.jpg?_nc_cat=111&_nc_sid=8ae9d6&_nc_ohc=oeU5qpvSks4AX8bLl_K&_nc_ht=scontent.cdninstagram.com&oh=760e78c980560ccd170a2a23c7f474f9&oe=5F0700E9",
            }}
          />
        </Layout>
        <Layout style={{ alignItems: "left", backgroundColor: "#40314f" }}>
          {/* {getInfo("equipment")} */}
          <Text style={styles.section}>Ingredients</Text>
          <Text style={styles.text}>{ingredients}</Text>
          <Text style={styles.section}>Equipment</Text>
          <Text style={styles.text}>{equipment}</Text>
          <Text style={styles.section}>Instructions</Text>
          <Text style={styles.text}>{instructions}</Text>
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
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").width,
  },
  section: {
    fontSize: 20,
    marginLeft: 26,
    paddingTop: 15,
    fontFamily: "Futura-Medium",
  },
  text: {
    fontSize: 16,
    marginLeft: 26,
    marginRight: 26,
    paddingTop: 10,
    paddingBottom: 10,
    fontFamily: "Futura-Medium",
  },
});
