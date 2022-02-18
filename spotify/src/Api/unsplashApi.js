import axios from "axios";
import store from "../store";

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
  (config) => {
    //const { token, setToken } = useToken();
    config.baseURL = "https://api.spotify.com/v1/";
    const token = store.getState().token;

    if (token) {
      config.headers.authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
export default axiosInstance;
