import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../../api/mockClient";

const initialState = {
  data: [],
  status: "pending",
};

export const fetchSocial = createAsyncThunk("social/fetchInfo", async () => {
  const response = await client.get("/mockApi/social");
  return response.data;
});

const socialSlice = createSlice({
  name: "social",
  initialState,
  reducers: {
    updateData: (state, action) => {
      state.data = action.payload.result;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchSocial.fulfilled, (state, action) => {
      state.status = "success";
      state.data = action.payload;
    });
  },
});

export const { updateData } = socialSlice.actions;

export default socialSlice.reducer;
