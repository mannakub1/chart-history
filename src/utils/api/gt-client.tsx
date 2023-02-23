import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import dayjs from "dayjs";
import humps from "humps";
import { ContentType, deepLoop } from "./tools";
import qs from "qs";

const BASE_TODO_API_HOST = `${process.env.REACT_APP_GT_HOST}`;

const createClient = () => {
  const ax = axios.create();
  ax.interceptors.request.use((request: AxiosRequestConfig) => {
    request.url = `${BASE_TODO_API_HOST}/${request.url}`;
    const headers = request.headers || {};

    headers.common["x-trace-id"] = process.env.REACT_APP_X_TRACE_ID;
    headers.common[
      "Authorization"
    ] = `Bearer ${process.env.REACT_APP_GT_TOKEN}`;

    if (headers["Content-Type"] === ContentType.FORMDATA) {
      if (request.data) {
        const formData = new FormData();
        Object.entries(request.data).forEach(([key, value]: [string, any]) => {
          const keyDecamelize = humps.decamelize(key);
          if (key === "files") {
            value.forEach((v: any) => {
              formData.append(keyDecamelize, v);
            });
          } else {
            formData.append(keyDecamelize, value);
          }
        });
        request.data = formData;
      }
    } else if (headers["Content-Type"] === ContentType.XFORM) {
      request.params = modifyRequestData(request.params);
      if (request.data) {
        request.data = modifyRequestData(request.data);
        request.data = qs.stringify(request.data);
      }
    } else if (headers["Content-Type"] === ContentType.JSON) {
      request.params = modifyRequestData(request.params);
      if (request.data) {
        request.data = deepLoop(request.data, modifyRequestData);
        request.data = humps.decamelizeKeys(request.data);
      }
    }

    return request;
  });
  ax.interceptors.response.use(
    (response: AxiosResponse<any>) => {
      if (response.headers["content-type"].includes("application/json")) {
        response.data = humps.camelizeKeys(response.data);
      }
      const { data } = response;
      if (data && data.code !== undefined && data.code !== 0) {
        return Promise.reject({ response });
      } else {
        return response;
      }
    },
    (error: any) => {
      const { response } = error;
      const { message } = response["data"] || {};

      console.log("error  response handle->", {
        error,
        message,
        response,
      });
      return Promise.reject(message || response.data);
    }
  );
  return ax;
};

const modifyRequestData = (data: any) => {
  if (dayjs.isDayjs(data)) {
    return data.format();
  }
  return data;
};

export const gtClient = createClient();

export const gtApiWrapper = async (method: Promise<AxiosResponse>) => {
  try {
    const res = await method;
    return Promise.resolve(res);
  } catch (e) {
    const { message, code, data } = (e || {}) as any;
    return Promise.reject(data || message || code || e);
  }
};
