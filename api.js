import axios from "axios";

export default {
  getUsername: (token) => {
    axios.get(
      "https://cors-anywhere.herokuapp.com/https://graph.instagram.com/me?fields=username&access_token=" +
        token,
      { headers: { origin: "" } }
    );
    // .then((res) => {
    //   console.log("getusernameres" + res);
    //   console.log("getusernameres" + JSON.stringify(res.data.username));
    // })
    // .catch((err) => console.log("getusernamerr" + err));
  },
  getMedia: (token) => {
    axios.get(
      "https://cors-anywhere.herokuapp.com/https://graph.instagram.com/me/media?fields=id&access_token=" +
        token,
      { headers: { origin: "" } }
    );
    // .then((res) => console.log(res))
    // .catch((err) => console.log(err));
  },
};
