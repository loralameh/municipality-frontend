import axios from "axios";
import { logoutUser } from "../features/user/userSlice";
import { getTokenFromLocalStorage } from "./localStorage";

const customFetch = axios.create({
  baseURL: "http://localhost:5000/api",
});

customFetch.interceptors.request.use((config) => {
  console.log(config);
  console.log(config.headers);
  const token = getTokenFromLocalStorage();

  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

export const checkForUnauthorizedResponse = (error, thunkAPI) => {
  if (error.response.status === 401 || error.response.status === 403) {
    thunkAPI.dispatch(logoutUser());
    return;
  }
  return error;
};

export default customFetch;
