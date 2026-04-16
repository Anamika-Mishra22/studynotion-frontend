import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api";
import axios from "axios";
// get Profile

export const getMyProfile = createAsyncThunk(
  "auth/getMyProfile",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.get("/instructors/me");
      console.log("PROFILE DATA FROM API 🔥", data);
      return data.instructor;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const updateMyProfile = createAsyncThunk(
  "auth/updateMyProfile",
    async (updatedData, { rejectWithValue }) => {
    try {
      const { data } = await api.put("/instructors/me", updatedData);
      return data.instructor;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
    },
);

export const signupInstructor = createAsyncThunk(
  "auth/signupInstructor",
  async (formData, { rejectWithValue }) => {
    try {
      const { data } = await api.post("/instructors/signup", formData);
      return data.instructor; // backend response me instructor object
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  },
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    instructor: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signupInstructor.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signupInstructor.fulfilled, (state, action) => {
        state.loading = false;
        state.instructor = action.payload;
      })
      .addCase(signupInstructor.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Signup failed";
      })
      .addCase(getMyProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(getMyProfile.fulfilled, (state, action) => {
        state.loading = false;
        console.log("PROFILE FROM 👉", action.payload);
        state.instructor = action.payload;
        console.log("INSTRUCTOR STATE 👉", state.instructor);
      })
      .addCase(getMyProfile.rejected, (state, action) => {
        state.loading = false;
        console.error("PROFILE FETCH ERROR", action.payload);
      })
      .addCase(updateMyProfile.fulfilled, (state, action) => {
        state.instructor = action.payload;
      });
  },
});

export default authSlice.reducer;
