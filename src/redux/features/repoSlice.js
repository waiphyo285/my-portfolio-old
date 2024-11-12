import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../../api/mockClient";

const initialState = {
  data: [],
  status: "pending",
};

export const fetchRepository = createAsyncThunk(
  "repository/fetchInfo",
  async () => {
    const response = await client.get("/mockApi/repository");
    return response.data;
  }
);

const repositorySlice = createSlice({
  name: "repository",
  initialState,
  reducers: {
    updateData: (state, action) => {
      state.data = action.payload.result;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchRepository.fulfilled, (state, action) => {
      state.status = "success";
      state.data = action.payload;
    });
  },
});

export const { updateData } = repositorySlice.actions;

export default repositorySlice.reducer;
