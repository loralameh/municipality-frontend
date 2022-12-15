import customFetch, { checkForUnauthorizedResponse } from "../../utils/axios";
import { logoutUser } from "./userSlice";

export const registerUserThunk = async (url, user, thunkAPI) => {
  try {
    const resp = await customFetch.post(url, user);
    return resp.data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const loginUserThunk = async (url, user, thunkAPI) => {
  try {
    const resp = await customFetch.post(url, user);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
};

export const getUsersThunk = async (url, thunkAPI) => {
  try {
    const resp = await customFetch.get(url);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const updateUserThunk = async ({ userId, user }, thunkAPI) => {
  try {
    const resp = await customFetch.patch(`/api/users/${userId}`, user);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
};

export const removeUserThunk = async (currentId, user, thunkAPI) => {
  try {
    const resp = await customFetch.delete(`/api/users/${currentId}`, user);
    return resp.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};

export const clearStoreThunk = async (message, thunkAPI) => {
  try {
    thunkAPI.dispatch(logoutUser(message));
    //thunkAPI.dispatch(clearAllJobsState());
    //thunkAPI.dispatch(clearValues());
    return Promise.resolve();
  } catch (error) {
    return Promise.reject();
  }
};
