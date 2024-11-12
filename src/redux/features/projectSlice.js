import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../../api/mockClient";

const initialState = {
  data: [],
  status: "pending",
};

export const fetchProject = createAsyncThunk("project/fetchInfo", async () => {
  const response = await client.get("/mockApi/project");
  return response.data;
});

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    updateData: (state, action) => {
      state.data = action.payload.result;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchProject.fulfilled, (state, action) => {
      state.status = "success";
      state.data = action.payload;
    });
  },
});

export const { updateData } = projectSlice.actions;

export default projectSlice.reducer;
