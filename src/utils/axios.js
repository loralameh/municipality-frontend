import axios from "axios";
import { logoutUser } from "../features/user/userSlice";
import { getTokenFromLocalStorage } from "./localStorage";

const customFetch = axios.create({
  baseURL: "http://localhost:5000/api",
});

customFetch.interceptors.request.use((config) => {
  const token = getTokenFromLocalStorage();

  if (token) {
    config.headers.common["Authorization"] = `Bearer ${token}`;
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
