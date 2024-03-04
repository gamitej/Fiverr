import axios from "axios";
import config from "../config";

const endpoint = config.baseUrl;

const http = axios.create({
  baseURL: endpoint,
  withCredentials: true,
});

export default http;
