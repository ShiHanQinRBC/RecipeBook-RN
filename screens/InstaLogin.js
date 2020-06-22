import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import InstagramLogin from "react-native-instagram-login";
import { Button, Divider, Layout, Text } from "@ui-kitten/components";
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

  successHandler = async (data) => {
    this.setToken(data.access_token);
    const username = await api.getUsername(this.state.token);
    const mediaIds = await api.getMedia(this.state.token);

    console.log(username);
    console.log(mediaIds);
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
        <Text style={{ fontSize: 40, color: "black" }}>Recipe Book</Text>
        <Button style={styles.btn} onPress={() => this.instagramLogin.show()}>
          <Text style={{ color: "white", textAlign: "center" }}>
            Login with Instagram!
          </Text>
        </Button>
        {/* <TouchableOpacity
          style={[styles.btn, { marginTop: 10, backgroundColor: "green" }]}
          onPress={() => this.onClear()}
        >
          <Text style={{ color: "white", textAlign: "center" }}>Logout</Text>
        </TouchableOpacity> */}

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
          redirectUrl="https://fbda029630f3.ngrok.io/"
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
    margin: 2,
  },
});
