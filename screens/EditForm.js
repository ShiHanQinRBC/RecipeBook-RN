import React, { useState } from "react";
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  Divider,
  Icon,
  Layout,
  TopNavigation,
  TopNavigationAction,
} from "@ui-kitten/components";
import TagInput from "react-native-tags-input";
import { ScrollView } from "react-native-gesture-handler";
import { db } from "../services/Firebase";

const BackIcon = (props) => <Icon {...props} name="arrow-back" />;
// const maiColor = "#3ca897";

export const EditForm = ({ route, navigation }) => {
  const [ingredients, setIngredients] = useState({
    tags: "",
    tagsArray: [],
  });
  const [equipment, setEquipment] = useState({
    tags: "",
    tagsArray: [],
  });
  const [instructions, setInstructions] = useState("");
  const [tagsColor, setTagsColor] = useState("#ada5b8");
  const [tagsText, setTagsText] = useState("#fff");
  const [buttonText, setButtonText] = useState("Submit");

  const updateIngredientsState = (state) => {
    setIngredients(state);
  };
  const updateEquipmentState = (state) => {
    setEquipment(state);
  };

  const useInputState = (initialValue = "") => {
    const [value, setValue] = React.useState(initialValue);
    return { value, onChangeText: setValue };
  };

  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );

  const addRecipe = () => {
    const recipeRef = db.collection("recipes").doc(route.params.mediaId);
    recipeRef
      .get()
      .then((snapshot) => {
        recipeRef.set({
          uid: route.params.username,
          id: route.params.mediaId,
          ingredients: ingredients.tagsArray,
          equipment: equipment.tagsArray,
          instructions: instructions,
        });
      })
      .catch((err) => console.log(err));
    setButtonText("Submitted!");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#40314f" }}>
      <ScrollView>
        <TopNavigation
          title="Edit Recipe"
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
          <View style={styles.tagContainer}>
            <TagInput
              updateState={updateIngredientsState}
              tags={ingredients}
              label="Press , and space to add an ingredient!"
              labelStyle={styles.label}
              containerStyle={{
                width: Dimensions.get("window").width - 36,
              }}
              inputContainerStyle={[
                styles.textInput,
                { backgroundColor: tagsColor },
              ]}
              inputStyle={{ color: tagsText, fontSize: 14 }}
              autoCorrect={false}
              tagStyle={styles.tag}
              tagTextStyle={styles.tagText}
              keysForTag={", "}
            />
            <TagInput
              updateState={updateEquipmentState}
              tags={equipment}
              label="Press , and space to add an equipment!"
              labelStyle={styles.label}
              containerStyle={{
                width: Dimensions.get("window").width - 40,
              }}
              inputContainerStyle={[
                styles.textInput,
                { backgroundColor: tagsColor },
              ]}
              inputStyle={{ color: tagsText, fontSize: 14 }}
              autoCorrect={false}
              tagStyle={styles.tag}
              tagTextStyle={styles.tagText}
              keysForTag={", "}
            />

            <Text style={styles.instructionsLabel}>
              Fill in the recipe instructions!
            </Text>
            <TextInput
              multiline={true}
              style={styles.instructions}
              onChangeText={(text) => setInstructions(text)}
            />
            <TouchableOpacity style={styles.btn} onPress={addRecipe}>
              <Text style={styles.btnText}>{buttonText}</Text>
            </TouchableOpacity>
          </View>
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
  tagContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#40314f",
  },
  button: {
    margin: 2,
  },
  label: {
    color: "#fff",
    fontFamily: "Futura-Medium",
    fontSize: 16,
  },
  instructionsLabel: {
    color: "#fff",
    fontFamily: "Futura-Medium",
    fontSize: 16,
    alignSelf: "flex-start",
    paddingLeft: 12,
    paddingTop: 10,
    paddingBottom: 4,
  },
  post: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").width,
  },
  textInput: {
    height: 40,
    borderColor: "#fff",
    borderWidth: 1,
    marginTop: 8,
    borderRadius: 5,
    padding: 3,
  },
  tag: {
    backgroundColor: "#fff",
  },
  tagText: {
    color: "#6b617a",
    fontSize: 14,
  },
  btn: {
    backgroundColor: "#c1bdc9",
    margin: 20,
    height: 40,
    width: 250,
    borderRadius: 8,
    borderColor: "white",
    borderWidth: 3,
  },
  btnText: {
    textAlign: "center",
    color: "#40314f",
    paddingTop: 6,
    fontFamily: "Futura-Medium",
  },
  instructions: {
    width: Dimensions.get("window").width - 60,
    height: 60,
    paddingLeft: 8,
    paddingRight: 26,
    paddingTop: 10,
    backgroundColor: "#ada5b8",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#fff",
    color: "#fff",
    fontSize: 14,
  },
});
