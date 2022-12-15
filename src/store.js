import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/user/userSlice";
import snackBarSlice from "features/snackBar/snackBarSlice";
export const store = configureStore({
  reducer: {
    user: userSlice,
    snackBar: snackBarSlice,
  },
});
