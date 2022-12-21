import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/user/userSlice";
import snackBarSlice from "features/snackBar/snackBarSlice";
import ContactUsSlice from "features/contact-us/ContactUsSlice";
export const store = configureStore({
  reducer: {
    user: userSlice,
    snackBar: snackBarSlice,
    contactUs: ContactUsSlice,
  },
});
