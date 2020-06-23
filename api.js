import axios from "axios";

export default {
  getUsername: async (token) => {
    //try {
    const res = await axios.get(
      "https://cors-anywhere.herokuapp.com/https://graph.instagram.com/me?fields=username&access_token=" +
        token,
      { headers: { origin: "" } }
    );
    return await res.data.username;
    // } catch (err) {
    //   console.log(err);
    // }
  },
  getMedia: async (token) => {
    //try {
    const res = await axios.get(
      "https://cors-anywhere.herokuapp.com/https://graph.instagram.com/me/media?fields=id&access_token=" +
        token,
      { headers: { origin: "" } }
    );
    return await res.data.data;
    // } catch (err) {
    //   console.log(err);
    // }
  },
  getPictureURL: async (id, token) => {
    const picURL =
      "https://graph.instagram.com/" +
      id +
      "?fields=media_type,media_url,username,timestamp&access_token=" +
      token;

    try {
      const res = await axios.get(picURL);
      return await res.data.media_url;
    } catch (err) {
      console.log(err);
    }
  },
};
