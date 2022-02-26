import axios from "axios";

export const Axios = axios.create({
  baseURL: process.env.server,
  timeout: 5000
});