import React, { Component } from "react";
import {
  Button,
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import InstagramLogin from "react-native-instagram-login";
import { /*Button,*/ Divider, Layout, Text } from "@ui-kitten/components";
import api from "../api";
import { db } from "../services/Firebase";
// import CookieManager from "@react-native-community/cookies";

export default class InstaLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      mediaIds: [],
      token: "",
    };
  }

  navigateDashboard = () => {
    this.props.navigation.navigate("Dashboard", {
      username: this.state.username,
      mediaIds: this.state.mediaIds,
      token: this.state.token,
    });
  };

  setToken = (token) => {
    //console.log("data", data);
    this.setState({ token: token });
  };

  addUser = (username) => {
    const userRef = db.collection("users").doc(username);
    userRef
      .get()
      .then((snapshot) => {
        if (!snapshot.exists) {
          //Only add user if they don't already exist
          userRef.set({
            username: username,
          });
        }
      })
      .catch((err) => console.log(err));
  };

  successHandler = async (data) => {
    //this.setToken(data.access_token);
    const usernameRes = await api.getUsername(data.access_token);
    const mediaIdsRes = await api.getMedia(data.access_token);

    this.setState({
      token: data.access_token,
      username: usernameRes,
      mediaIds: mediaIdsRes,
    });
    this.addUser(usernameRes);
    this.navigateDashboard();
  };

  //   onClear() {
  //     CookieManager.clearAll(true).then((res) => {
  //       this.setState({ token: null });
  //     });
  //   }

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#40314f",
        }}
      >
        <Image
          style={{ height: 216, width: 375 }}
          source={require("./Logo.png")}
        />
        <TouchableOpacity
          style={styles.btn}
          onPress={() => this.instagramLogin.show()}
        >
          <Text style={styles.btnText}>Log In With Instagram!</Text>
        </TouchableOpacity>

        {this.state.failure && (
          <View>
            <Text style={{ margin: 10 }}>
              failure: {JSON.stringify(this.state.failure)}
            </Text>
          </View>
        )}
        <InstagramLogin
          ref={(ref) => (this.instagramLogin = ref)}
          appId="857366711422868"
          appSecret="a69514fe451d7acec9cd710fa9d102a3"
          redirectUrl="https://1b429339b8f2.ngrok.io/"
          scopes={["user_profile", "user_media"]}
          onLoginSuccess={this.successHandler}
          onLoginFailure={(data) => console.log(data)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#c1bdc9",
    margin: 50,
    height: 40,
    width: 250,
    borderRadius: 8,
    borderColor: "white",
    borderWidth: 3,
  },
  btnText: {
    textAlign: "center",
    color: "#40314f",
    paddingTop: 8,
    fontFamily: "Futura-Medium",
  },
});
