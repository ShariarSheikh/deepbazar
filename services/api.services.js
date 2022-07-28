import axios from "axios";
import { baseUrl, xApiKey } from "../config";

const instance = axios.create({
  baseURL: baseUrl,
  headers: {
    "x-api-key": xApiKey,
  },
});

export default class Api {
  static get = (url) => {
    return instance.get(url).then((res) => res);
  };

  static post = (url, body) => {
    return instance.post(url, body).then((res) => res);
  };

  static update = (url, body) => {
    return instance.put(url, body).then((res) => res);
  };

  static deleteMethod = (url) => {
    return instance.get(url).then((res) => res);
  };
}
