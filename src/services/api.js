import axios from "axios";

export const api = axios.create({
  baseURL: "http://lojadesuplementos.herokuapp.com/api/",
});
