import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../../api/mockClient";

const initialState = {
  data: [],
  status: "pending",
};

export const fetchNav = createAsyncThunk("navlist/fetchInfo", async () => {
  const response = await client.get("/mockApi/navlist");
  return response.data;
});

const navlistSlice = createSlice({
  name: "navlist",
  initialState,
  reducers: {
    updateData: (state, action) => {
      state.data = action.payload.result;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchNav.fulfilled, (state, action) => {
      state.status = "success";
      state.data = action.payload;
    });
  },
});

export const { updateData } = navlistSlice.actions;

export default navlistSlice.reducer;
