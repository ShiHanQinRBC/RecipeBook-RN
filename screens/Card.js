import React, { useState, useEffect, Component } from "react";
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Button, Divider, Layout, Text } from "@ui-kitten/components";
import api from "../api";

export const Card = (props) => {
  const [url, setUrl] = useState("");
  const [date, setDate] = useState("");

  const navigateEdit = () => {
    props.navigation.navigate("EditForm", {
      picUrl: url,
      username: props.username,
      mediaId: props.mediaId,
    });
  };

  const navigateView = () => {
    props.navigation.navigate("ViewPost", {
      picUrl: url,
      username: props.username,
      mediaId: props.mediaId,
    });
  };

  const getPic = async () => {
    const url = await api.getPictureURL(props.mediaId, props.token);
    setUrl(url);
  };

  const getDate = async () => {
    const date = await api.getDate(props.mediaId, props.token);
    setDate(date.substring(0, 10));
  };

  useEffect(() => {
    getPic();
    getDate();
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout style={styles.container}>
        <Text style={styles.date}>{date}</Text>
        <Image
          style={styles.post}
          source={{
            //url,
            uri: url,
            //"https://scontent.cdninstagram.com/v/t51.2885-15/100955186_158607965797189_6778942453506911128_n.jpg?_nc_cat=111&_nc_sid=8ae9d6&_nc_ohc=oeU5qpvSks4AX8bLl_K&_nc_ht=scontent.cdninstagram.com&oh=760e78c980560ccd170a2a23c7f474f9&oe=5F0700E9",
          }}
        />

        <TouchableOpacity style={styles.btn} onPress={navigateEdit}>
          <Text style={styles.btnText}>Edit Recipe</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={navigateView}>
          <Text style={styles.btnText}>View Recipe</Text>
        </TouchableOpacity>
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
    backgroundColor: "#40314f",
  },
  date: {
    fontStyle: "italic",
    fontSize: 24,
    fontFamily: "Futura-Medium",
    paddingTop: 12,
    paddingBottom: 5,
  },
  post: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").width,
  },
  btn: {
    margin: 8,
    height: 45,
    width: (Dimensions.get("window").width - 50) / 2,
    backgroundColor: "#c1bdc9",
    borderRadius: 8,
    borderColor: "white",
    borderWidth: 3,
  },
  btnText: {
    paddingTop: 7,
    fontSize: 18,
    fontFamily: "Futura-Medium",
    textAlign: "center",
    color: "#40314f",
  },
});
