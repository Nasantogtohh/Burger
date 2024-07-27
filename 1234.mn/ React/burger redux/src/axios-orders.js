import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-de453-default-rtdb.firebaseio.com",
});

export default instance;
