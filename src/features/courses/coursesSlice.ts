import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCoursesAPI } from "./coursesAPI";
import { RootState } from "../../app/store";

export interface Course {
  id: string;
  name: string;
  instructor: string;
  description: string;
  enrollmentStatus: string;
  thumbnail: string;
  duration: string;
  schedule: string;
  location: string;
  prerequisites: string[];
  syllabus: { week: number; topic: string; content: string }[];
}

interface CoursesState {
  courses: Course[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: CoursesState = {
  courses: [],
  status: "idle",
  error: null,
};

export const fetchCourses = createAsyncThunk(
  "courses/fetchCourses",
  async () => {
    const response = await fetchCoursesAPI();
    return response.data;
  }
);

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.courses = action.payload;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      });
  },
});

export const selectAllCourses = (state: RootState) => state.courses.courses;
export const getCoursesStatus = (state: RootState) => state.courses.status;
export const getCoursesError = (state: RootState) => state.courses.error;

export default coursesSlice.reducer;
