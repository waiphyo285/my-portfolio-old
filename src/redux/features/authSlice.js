import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../../api/mockClient";

import ssService from "../../services/sessionStorage";

const user = ssService.getItem("user");

const initialState = user
  ? { status: "authorized", user }
  : { status: "unAuthorized", user: null };

export const authLogin = createAsyncThunk(
  "auth/loginInfo",
  async (loginData) => {
    const response = await client.post("/mockApi/login", loginData);
    return response.data;
  }
);

export const authLogout = createAsyncThunk("auth/logoutInfo", async () => {
  const response = await client.post("/mockApi/logout", {});
  return response.data;
});

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  extraReducers(builder) {
    builder
      .addCase(authLogin.fulfilled, (state, action) => {
        state = action.payload
          ? { status: "authorized", user: action.payload }
          : { status: "unAuthorized", user: null };
      })
      .addCase(authLogout.fulfilled, (state, action) => {
        state = { status: "unAuthorized", user: null };
      });
  },
});

export default authSlice.reducer;
