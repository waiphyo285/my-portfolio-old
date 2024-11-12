import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../../api/mockClient";

const initialState = {
  data: null,
  status: "pending",
};

export const fetchMe = createAsyncThunk("me/fetchInfo", async () => {
  const response = await client.get("/mockApi/personal");
  return response.data;
});

const meSlice = createSlice({
  name: "me",
  initialState,
  reducers: {
    updateData: (state, action) => {
      state.data = action.payload.result;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchMe.fulfilled, (state, action) => {
      state.status = "success";
      state.data = action.payload;
    });
  },
});

export const { updateData } = meSlice.actions;

export default meSlice.reducer;
