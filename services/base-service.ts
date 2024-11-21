/* eslint-disable import/no-anonymous-default-export */
import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import Config from "@/config";

axios.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    if (config.headers.contentType) {
      config.headers["Content-Type"] = config.headers.contentType;
    }

    if (config.url && !config.url.startsWith("http")) {
      config.url = `${Config.env.BaseUrl}${config.url}`;
    }
    console.log("url", config.url);
    if (config.url) {
      config.headers["Cache-Control"] =
        "no-cache, no-store, must-revalidate, post-check=0, pre-check=0";
      config.headers.Pragma = "no-cache";
      config.headers.Expires = "0";
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    console.log(error.message);
    return Promise.reject(error);
  }
);

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  patch: axios.patch,
};
