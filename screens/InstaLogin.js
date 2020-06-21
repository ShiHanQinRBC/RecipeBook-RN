import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import InstagramLogin from "react-native-instagram-login";
import api from "../api";
// import CookieManager from "@react-native-community/cookies";

export default class InstaLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: "",
    };
  }

  navigateDashboard = () => {
    this.props.navigation.navigate("Dashboard");
  };

  setToken = (token) => {
    //console.log("data", data);
    this.setState({ token: token });
  };

  successHandler = (data) => {
    this.setToken(data.access_token);
    const username = api.getUsername(this.state.token);
    const media = api.getMedia(this.state.token);

    console.log("instalogin " + username); //Why are these undefined?
    console.log("instalogin " + media);
    this.navigateDashboard();
  };

  //   onClear() {
  //     CookieManager.clearAll(true).then((res) => {
  //       this.setState({ token: null });
  //     });
  //   }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => this.instagramLogin.show()}
        >
          <Text style={{ color: "white", textAlign: "center" }}>Login now</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btn, { marginTop: 10, backgroundColor: "green" }]}
          //onPress={() => this.onClear()}
        >
          <Text style={{ color: "white", textAlign: "center" }}>Logout</Text>
        </TouchableOpacity>
        <Text style={{ margin: 10 }}>Token: {this.state.token}</Text>
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
          redirectUrl="https://72463c727b13.ngrok.io/"
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
    borderRadius: 5,
    backgroundColor: "orange",
    height: 30,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});
