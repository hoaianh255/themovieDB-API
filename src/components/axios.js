import axios from "axios";

export const API_THEMOVIEDB_KEY = "a7ba67275e53400e1f8ebb6561c694b7";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3"
})
export default instance;