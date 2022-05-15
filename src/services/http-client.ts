import axios from "axios";

const baseURL = 'http://localhost:4001/api'

export const client = axios.create({
  baseURL,
  timeout: 1000,
});
