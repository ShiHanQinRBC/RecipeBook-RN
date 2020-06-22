import axios from "axios";

export default {
  getUsername: async (token) => {
    const res = await axios.get(
      "https://cors-anywhere.herokuapp.com/https://graph.instagram.com/me?fields=username&access_token=" +
        token,
      { headers: { origin: "" } }
    );
    return await res.data.username;
  },
  getMedia: async (token) => {
    const res = await axios.get(
      "https://cors-anywhere.herokuapp.com/https://graph.instagram.com/me/media?fields=id&access_token=" +
        token,
      { headers: { origin: "" } }
    );
    return await res.data.data;
  },
};
