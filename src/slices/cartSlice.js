import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCartItems, postChangeCart } from "../api/cartApi";

export const getCartItemsAsync = createAsyncThunk("getCartItemsAsync", () => {
  return getCartItems();
});

export const postChangeCartAsync = createAsyncThunk(
  "postChangeCartAsync",
  (param) => {
    console.log("cartSlice : param", param);
    return postChangeCart(param);
  }
);

const initialState = [];
const cartSlice = createSlice({
  name: "cartSlice",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getCartItemsAsync.fulfilled, (state, action) => {
        console.log("getCartItemsAsync fulfilled");
        return action.payload;
      })
      .addCase(postChangeCartAsync.fulfilled, (state, action) => {
        console.log("postCartItemsAsync fulfilled");
        return action.payload;
      });
  },
});
export default cartSlice.reducer;
