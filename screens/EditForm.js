import React, { useState } from "react";
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  View,
  KeyboardAvoidingView,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

// TextInput, StyleSheet, Text, Platform, TouchableWithoutFeedback, Button, Keyboard  }
// import { Icon } from "react-native-elements";
import {
  Button,
  Divider,
  Icon,
  Input,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
} from "@ui-kitten/components";
import TagInput from "react-native-tags-input";

const BackIcon = (props) => <Icon {...props} name="arrow-back" />;
// const maiColor = "#3ca897";

export const EditForm = ({ navigation }) => {
  const [ingredients, setIngredients] = useState({
    tags: "",
    tagsArray: [],
  });
  const [equipment, setEquipment] = useState({
    tags: "",
    tagsArray: [],
  });

  const [tagsColor, setTagsColor] = useState("#ada5b8");
  const [tagsText, setTagsText] = useState("#fff");

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

  const multilineInputState = useInputState();

  const navigateBack = () => {
    navigation.goBack();
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
        <Text category="h1">Edit Form</Text>
        <View style={styles.tagContainer}>
          <TagInput
            updateState={updateIngredientsState}
            tags={ingredients}
            placeholder="Ingredients..."
            label="Press , and space to add an ingredient!"
            labelStyle={{ color: "#fff" }}
            containerStyle={{
              width: Dimensions.get("window").width - 40,
            }}
            inputContainerStyle={[
              styles.textInput,
              { backgroundColor: tagsColor },
            ]}
            inputStyle={{ color: tagsText }}
            autoCorrect={false}
            tagStyle={styles.tag}
            tagTextStyle={styles.tagText}
            keysForTag={", "}
          />
          <TagInput
            updateState={updateEquipmentState}
            tags={equipment}
            placeholder="Equipment..."
            label="Press , and space to add an equipment!"
            labelStyle={{ color: "#fff" }}
            containerStyle={{
              width: Dimensions.get("window").width - 40,
            }}
            inputContainerStyle={[
              styles.textInput,
              { backgroundColor: tagsColor },
            ]}
            inputStyle={{ color: tagsText }}
            autoCorrect={false}
            tagStyle={styles.tag}
            tagTextStyle={styles.tagText}
            keysForTag={", "}
          />
          {/* <React.Fragment> */}

          <Input
            label="Fill in the Recipe Instructions"
            labelStyle={{ color: "#fff" }}
            multiline={true}
            textStyle={{ minHeight: 64 }}
            placeholder="Instructions"
            {...multilineInputState}
          />

          {/* </React.Fragment> */}
        </View>
      </Layout>
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
    backgroundColor: "#6b617a",
  },
  button: {
    margin: 2,
  },
  textInput: {
    height: 40,
    borderColor: "white",
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
  },
});
