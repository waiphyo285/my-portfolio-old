import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../../api/mockClient";

const initialState = {
  data: [],
  status: "pending",
};

export const fetchContent = createAsyncThunk("content/fetchInfo", async () => {
  const response = await client.get("/mockApi/content");
  return response.data;
});

const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    updateData: (state, action) => {
      state.data = action.payload.result;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchContent.fulfilled, (state, action) => {
      state.status = "success";
      state.data = action.payload;
    });
  },
});

export const { updateData } = contentSlice.actions;

export default contentSlice.reducer;
