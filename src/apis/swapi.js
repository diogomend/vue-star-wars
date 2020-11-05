import axios from "axios";
import { cacheAdapterEnhancer } from "axios-extensions";

const cacheConfig = {
  enabledByDefault: false,
  cacheFlag: "useCache"
};

const axiosInstance = axios.create({
  baseURL: process.env.VUE_APP_API,
  headers: {
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest"
  },
  adapter: cacheAdapterEnhancer(axios.defaults.adapter, cacheConfig)
});

export default axiosInstance;
