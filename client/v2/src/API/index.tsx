import axios from "axios";

export const API = axios.create({
  baseURL: "https://maca-bookshelf-server.herokuapp.com/v1",
});
