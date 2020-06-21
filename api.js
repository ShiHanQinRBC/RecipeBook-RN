import axios from "axios";

export default {
  getToken: (code) => {
    const data = new FormData();
    data.append("client_id", "857366711422868");
    data.append("client_secret", "a69514fe451d7acec9cd710fa9d102a3");
    data.append("grant_type", "authorization_code");
    data.append("redirect_uri", "https://f6d65732caf2.ngrok.io/");
    data.append("code", code);

    const headers = {
      "Content-Type": "multipart/form-data",
    };

    axios.post(
      "https://cors-anywhere.herokuapp.com/https://api.instagram.com/oauth/access_token",
      data,
      headers
    );
    // .then(
    //   (response) => {
    //     const accessToken = response.data["access_token"];
    //     const userID = response.data["user_id"];
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
  },
};
