import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  type: "success",
  message: "",
};
const userSlice = createSlice({
  name: "snackBar",
  initialState,
  reducers: {
    setSnackbar: (state, { payload }) => {
      state.open = payload.open;
      state.type = payload.type;
      state.message = payload.message;
    },
  },
});

export const { setSnackbar } = userSlice.actions;
export default userSlice.reducer;
