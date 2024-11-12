/* eslint-disable import/no-anonymous-default-export */
import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { toast } from "react-toastify";
import Config from "@/config";
import { UNAUTHORIZED, INTERNAL_SERVER_ERROR } from "@/utils/constants";
import { HttpStatusCodes } from "@/utils/enums/http-status-codes";

axios.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    if (config.headers.contentType) {
      config.headers["Content-Type"] = config.headers.contentType;
    }

    if (config.url) {
      config.url = Config.env.BaseUrl + config.url;
    }

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
    return response.data;
  },
  (error: AxiosError) => {
    switch (error.response?.status) {
      case HttpStatusCodes.Unauthorized:
        toast.error(UNAUTHORIZED);
        window.location.reload();
        break;
      case HttpStatusCodes.BadRequest:
        toast.error(
          error.response?.data
            ? error.response?.data?.toString()
            : error.message
        );
        break;
      case HttpStatusCodes.InternalServerError:
        toast.error(INTERNAL_SERVER_ERROR);
        break;
      case HttpStatusCodes.NotFound:
        toast.error(
          error.response?.data
            ? error.response?.data?.toString()
            : error.message
        );
        break;
      default:
        toast.error(
          error.response?.data
            ? error.response?.data?.toString()
            : error.message
        );
        break;
    }

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
