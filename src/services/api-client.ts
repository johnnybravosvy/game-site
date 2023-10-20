import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "284d40a3666043da996133b640278bc7",
  },
});
