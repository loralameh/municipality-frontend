import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createContactUsMessageThunk } from "./ContactUsThunk";

const initialState = {
  message: "",
  isLoading: false,
  endsession: false,
  snackBarSettings: {
    open: false,
    type: "",
    message: "",
  },
};

export const createContactUsMessage = createAsyncThunk(
  "contactUs/createContactUsMessage",
  async (values, thunkAPI) => {
    return createContactUsMessageThunk("/contact-us", values, thunkAPI);
  }
);

const contactUsSlice = createSlice({
  name: "contactUs",
  initialState,
  reducers: {},
  extraReducers: {
    [createContactUsMessage.pending]: (state) => {
      state.isLoading = true;
    },
    [createContactUsMessage.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.snackBarSettings = {
        open: true,
        type: "success",
        message: `تم الإرسال`,
      };
    },
    [createContactUsMessage.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.snackBarSettings = {
        open: false,
        type: "",
        message: "",
      };
    },
  },
});

// export const {  } = contactUsSlice.actions;
export default contactUsSlice.reducer;
