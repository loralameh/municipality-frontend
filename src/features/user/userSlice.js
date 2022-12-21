import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  addTokenToLocalStorage,
  getTokenFromLocalStorage,
  removeTokenFromLocalStorage,
  addUserToLocalStorage,
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
} from "utils/localStorage";
import {
  loginUserThunk,
  registerUserThunk,
  updateUserThunk,
  removeUserThunk,
  clearStoreThunk,
  getUsersThunk,
} from "./userThunk";

const initialState = {
  isLoading: false,
  user: getUserFromLocalStorage(),
  token: getTokenFromLocalStorage(),
  endsession: false,
  snackBarSettings: {
    open: false,
    type: "",
    message: "",
  },
};
// export const getUsers = createAsyncThunk(
//   "user/getUsers",
//   async (factory_id, thunkAPI) => {
//     return getUsersThunk(`/api/factories/${factory_id}/users`, thunkAPI);
//   }
// );
// export const getUser = createAsyncThunk(
//   "user/getUser",
//   async (user, thunkAPI) => {
//     return getUsersThunk("/api/users/" + user.id, thunkAPI);
//   }
// );

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (user, thunkAPI) => {
    return registerUserThunk("/auth/register", user, thunkAPI);
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (user, thunkAPI) => {
    return loginUserThunk("/auth/login", user, thunkAPI);
  }
);

// export const updateUser = createAsyncThunk("user/updateUser", updateUserThunk);

// export const removeUser = createAsyncThunk("user/removeUser", removeUserThunk);

// export const clearStore = createAsyncThunk("user/clearStore", clearStoreThunk);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logoutUser: (state, { payload }) => {
      removeUserFromLocalStorage();
      removeTokenFromLocalStorage();
      state.user = null;
      state.token = null;
    },
  },
  extraReducers: {
    // [getUser.pending]: (state) => {
    //   // state.isLoading = true;
    // },
    // [getUser.fulfilled]: (state, { payload }) => {
    //   state.registered_user = payload;
    //   state.isLoading = false;
    // },
    // [getUser.rejected]: (state, { payload }) => {
    //   console.log(payload);
    //   state.isLoading = false;
    // },
    // [getUsers.pending]: (state) => {
    //   state.isLoading = true;
    // },
    // [getUsers.fulfilled]: (state, { payload }) => {
    //   const { users, token } = payload;
    //   state.isLoading = false;
    //   state.users = users;
    //   state.token = token;
    // },
    // [getUsers.rejected]: (state, { payload }) => {
    //   state.isLoading = false;
    // },
    [registerUser.pending]: (state) => {
      state.isLoading = true;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      const { user, token } = payload;
      state.isLoading = false;
      state.snackBarSettings = {
        open: true,
        type: "success",
        message: `اهلا بك ${user.name} !`,
      };
      state.user = user;
      state.token = token;
      addUserToLocalStorage(user);
      addTokenToLocalStorage(token);
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.snackBarSettings = {
        open: false,
        type: "",
        message: "",
      };
    },
    [loginUser.pending]: (state) => {
      state.isLoading = true;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      console.log(payload);
      const { user, token } = payload;
      state.user = user;
      state.token = token;
      addUserToLocalStorage(user);
      addTokenToLocalStorage(token);
      state.isLoading = false;
      state.snackBarSettings = {
        open: true,
        type: "success",
        message: `اهلا بك ${user.name} !`,
      };
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.snackBarSettings = {
        open: false,
        type: "",
        message: "",
      };
    },
    // [updateUser.pending]: (state) => {
    //   state.isLoading = true;
    // },
    // [updateUser.fulfilled]: (state, { payload }) => {
    //   state.isLoading = false;
    //   state.showAll = !state.showAll;
    // },
    // [updateUser.rejected]: (state, { payload }) => {
    //   state.isLoading = false;
    // },
    // [removeUser.pending]: (state) => {
    //   state.isLoading = true;
    // },
    // [removeUser.fulfilled]: (state, { payload }) => {
    //   state.isLoading = false;
    //   state.showAll = !state.showAll;
    // },
    // [removeUser.rejected]: (state, { payload }) => {
    //   state.isLoading = false;
    //   state.endsession = true;
    // },
    // [clearStore.rejected]: () => {
    //   toast.error("There was an error..");
    // },
  },
});

export const { logoutUser } = userSlice.actions;
export default userSlice.reducer;
