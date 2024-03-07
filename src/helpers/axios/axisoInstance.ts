import { authKey } from "@/constants/storageKey";
import { IGenricErrorResponse, ResponseSuccessType } from "@/types";
import { getFromLocalStorage } from "@/utils/local-store";
import axios from "axios";

const instance = axios.create();

instance.defaults.headers.post["Content-Type"] = "application/json";
instance.defaults.headers["Accept"] = "application/json";
instance.defaults.timeout = 60000;

instance.interceptors.request.use(
  function (config) {
    const accessToken = getFromLocalStorage(authKey);
    if (accessToken) {
      config.headers.Authorization = accessToken;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
//@ts-ignore
instance.interceptors.response.use(
  //@ts-ignore
  function (response) {
    console.log(response?.data?.data?.meta);
    const responseObject: ResponseSuccessType = {
      data: response?.data?.data?.data,
      meta: response?.data?.meta,
    };
    return responseObject;
  },
  function (error) {
    const responseObject: IGenricErrorResponse = {
      statusCode: error.response.data.statusCode || 500,
      message: error.response.data.message || "Something is wrong",
      errorMessages: error.response.data.errorMessages,
    };
    return Promise.reject(responseObject);
  }
);

export { instance };
