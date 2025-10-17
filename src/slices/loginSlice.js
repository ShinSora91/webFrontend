import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginPost } from "../api/memberApi";

const initState = {
  email: "",
};

const loginSlice = createSlice({
  name: "LoginSlice",
  initialState: initState,
  reducers: {
    login: (state, action) => {
      console.log("login.....");
      const data = action.payload; //{email, pw로 구성}
      return { email: data.email }; //새로운 상태
    },
    logout: (state, action) => {
      console.log("logout.....");
      return { ...initState };
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(loginPostAsync.fulfilled, (state, action) => {
        console.log("fulfilled");
      })
      .addCase(loginPostAsync.pending, (state, action) => {
        console.log("pending");
      })
      .addCase(loginPostAsync.rejected, (state, action) => {
        console.log("rejected");
      });
  },
});
export const loginPostAsync = createAsyncThunk("loginPostAsync", (param) =>
  loginPost(param)
);

export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;
