// src/redux/course/courseSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../utils/api";

import axios from "axios";

export const publishCourse = createAsyncThunk(
  "course/publishCourse",
  async ({ thumbnail }, { getState, rejectWithValue }) => {
    try {
      const { courses } = getState();

      const formData = new FormData();

      formData.append("title", courses.course.title);
      formData.append("category", courses.course.category);
      formData.append("overview", courses.course.overview);
      formData.append("price", courses.pricing.price);
      formData.append("sections", JSON.stringify(courses.sections));

      //  REAL FILE (NOT STRING)
      formData.append("thumbnail", thumbnail);
      console.log("THUMBNAIL IN THUNK ", thumbnail);

      // DEBUG (MUST SEE FILE HERE)
      for (let pair of formData.entries()) {
        console.log("feli", pair[0], pair[1]);
      }

      const res = await api.post("/courses/create", formData, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data);
    }
  },
);

// Here we create a new thunk to fetch the instructor's courses without
export const fetchCourseById = createAsyncThunk(
  "course/fetchCourseById",
  async (courseId, { rejectWithValue }) => {
    try {
      const res = await api.get(`/courses/${courseId}`);
      return res.data.course;
    } catch (err) {
      return rejectWithValue(err.response?.data);
    }
  },
);
export const fetchMyCourses = createAsyncThunk(
  "course/fetchMyCourses",
  async (_, { rejectWithValue }) => {
    const res = await api.get("/courses/my"); // GET all courses
    return res.data;
  },
);

// section
export const addSectionBack = createAsyncThunk(
  "course/addSectionBack",
  async ({ courseId, title }, { rejectWithValue }) => {
    try {
      const res = await api.post(`/sections/create`, {
        courseId,
        title,
      });
      return res.data.section;
    } catch (err) {
      return rejectWithValue(err.response?.data);
    }
  },
);

// lecture
export const addLectureBack = createAsyncThunk(
  "course/addLectureBack",
  async ({ sectionId, title, videoUrl }, { rejectWithValue }) => {
    try {
      const res = await api.post(`/lectures/create`, {
        sectionId,
        title,
        videoUrl,
      });
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data);
    }
  },
);

// publish
export const publishCourseBack = createAsyncThunk(
  "course/publishCourseBack",
  async (courseId, { rejectWithValue }) => {
    try {
      const res = await api.put(`/courses/publish/${courseId}`);
      return res.data.course;
    } catch (err) {
      return rejectWithValue(err.response?.data);
    }
  },
);

// update course basic info
export const updateCourseBack = createAsyncThunk(
  "course/updateCourseBack",
  async ({ courseId, data, thumbnail }, { rejectWithValue }) => {
    try {
      const formData = new FormData();

      Object.keys(data).forEach((key) => {
        formData.append(key, data[key]);
      });

      if (thumbnail) {
        formData.append("thumbnail", thumbnail);
      }

      const res = await api.put(`/courses/${courseId}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return res.data.course;
    } catch (err) {
      console.log("BACKEND ERROR 👉", err.response?.data);
      return rejectWithValue(err.response?.data);
    }
  },
);

// delete Section

export const deleteSectionBack = createAsyncThunk(
  "course/deleteSectionBack",
  async (sectionId, { rejectWithValue }) => {
    try {
      await api.delete(`/sections/${sectionId}`);
      return sectionId;
    } catch (err) {
      return rejectWithValue(err.response?.data);
    }
  },
);

// delete lecture

export const deleteLectureBack = createAsyncThunk(
  "course/deleteLectureBack",
  async (lectureId, { rejectWithValue }) => {
    try {
      await api.delete(`/lectures/${lectureId}`);
      return lectureId;
    } catch (err) {
      return rejectWithValue(err.response?.data);
    }
  },
);

// update section

export const updateSectionBack = createAsyncThunk(
  "course/updateSectionBack",
  async ({ sectionId, title }, { rejectWithValue }) => {
    try {
      const res = await api.put(`/sections/${sectionId}`, { title });
      return res.data.section;
    } catch (err) {
      return rejectWithValue(err.response?.data);
    }
  },
);

// update lecture
export const updateLectureBack = createAsyncThunk(
  "course/updateLectureBack",
  async ({ lectureId, title }, { rejectWithValue }) => {
    try {
      const res = await api.put(`/lectures/${lectureId}`, { title });
      return res.data.lecture;
    } catch (err) {
      return rejectWithValue(err.response?.data);
    }
  },
);

// fetchPublished Course from CourseController

export const fetchPublishedCourses = createAsyncThunk(
  "courses/fetchPublishedCourses",
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.get("/courses/published");
      console.log("PUBLISHED COURSES FROM BACKEND 👉", res.data.courses);
      return res.data.courses;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

const initialState = {
  step: 1,
  publishedCourses: [],
  token: localStorage.getItem("token"),
  loading: false,
  published: false,
  error: null,
  currentCourse: null,

  course: {
    title: "",
    category: "",
    level: "",
    language: "",
    thumbnail: "",
    overview: "",
    //  sections: [],
  },
  sections: [],
  myCourses: [],

  pricing: {
    price: "",
    discount: "",
  },
};

// slice +Reducer
const courseSlice = createSlice({
  name: "course",
  initialState,

  reducers: {
    // 🔸 step control

    resetCurrentCourse(state) {
      state.currentCourse = null;
    },

    nextStep(state) {
      state.step += 1;
    },

    prevStep(state) {
      state.step -= 1;
    },

    // 🔸 course basic info
    updateCourse(state, action) {
      state.course = {
        ...state.course,
        ...action.payload,
      };
    },

    // 🔸 section handling
    addSection(state, action) {
      state.sections.push({
        title: action.payload,
        lectures: [],
      });
    },

    addLecture(state, action) {
      const { sectionIndex, lecture } = action.payload;
      state.sections[sectionIndex].lectures.push(lecture);
    },

    // 🔸 pricing
    updatePricing(state, action) {
      state.pricing = {
        ...state.pricing,
        ...action.payload,
      };
    },

    // 🔸 reset after publish
    resetCourse() {
      return initialState;
    },
  },

  // 👇 THIS IS NEW (add only)
  extraReducers: (builder) => {
    builder
      .addCase(publishCourse.pending, (state) => {
        state.loading = true;
      })
      .addCase(publishCourse.fulfilled, (state) => {
        state.loading = false;
        state.published = true;
      })
      .addCase(publishCourse.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchCourseById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCourseById.fulfilled, (state, action) => {
        state.loading = false;
        state.currentCourse = action.payload;
      })
      .addCase(fetchCourseById.rejected, (state, action) => {
        state.loading = false;
        console.log("REJECTED 👉", action.payload);
        state.error = action.payload;
      })
      .addCase(addSectionBack.fulfilled, (state, action) => {
        state.currentCourse.sections.push({ ...action.payload, isNew: true });
      })

      // ================= ADD LECTURE =================
      .addCase(addLectureBack.fulfilled, (state, action) => {
        const { sectionId, lecture } = action.payload;

        const section = state.currentCourse.sections.find(
          (sec) => sec._id === sectionId,
        );

        if (section) {
          section.lectures.push({ ...lecture, isNew: true });
        }
      })

      // ================= PUBLISH COURSE =================
      .addCase(publishCourseBack.pending, (state) => {
        state.loading = true;
      })
      .addCase(publishCourseBack.fulfilled, (state, action) => {
        state.currentCourse = action.payload;
        state.published = true;
      })
      .addCase(publishCourseBack.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(fetchMyCourses.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMyCourses.fulfilled, (state, action) => {
        state.loading = false;
        state.myCourses = action.payload; // save courses
      })
      .addCase(fetchMyCourses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteSectionBack.fulfilled, (state, action) => {
        const sectionId = action.payload;

        state.currentCourse.sections = state.currentCourse.sections.filter(
          (sec) => sec._id !== sectionId,
        );

        state.currentCourse.status = "Draft";
      })
      .addCase(deleteLectureBack.fulfilled, (state, action) => {
        state.currentCourse.sections.forEach((sec) => {
          sec.lectures = sec.lectures.filter(
            (lec) => lec._id !== action.payload,
          );
        });
      })
      .addCase(updateSectionBack.fulfilled, (state, action) => {
        const updatedSection = action.payload;

        const index = state.currentCourse.sections.findIndex(
          (sec) => sec._id === updatedSection._id,
        );

        if (index !== -1) {
          state.currentCourse.sections[index] = updatedSection;
        }

        state.currentCourse.status = "Draft";
      })
      .addCase(updateLectureBack.fulfilled, (state, action) => {
        const updatedLecture = action.payload;

        state.currentCourse.sections.forEach((section) => {
          const index = section.lectures.findIndex(
            (lec) => lec._id === updatedLecture._id,
          );

          if (index !== -1) {
            section.lectures[index] = updatedLecture;
          }
        });

        state.currentCourse.status = "Draft";
      })
      .addCase(updateCourseBack.fulfilled, (state, action) => {
        state.myCourses = state.myCourses.map((c) =>
          c._id === action.payload._id ? action.payload : c,
        );

        if (state.currentCourse?._id === action.payload._id) {
          state.currentCourse = action.payload;
        }
      })
      .addCase(fetchPublishedCourses.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPublishedCourses.fulfilled, (state, action) => {
        state.loading = false;
        state.publishedCourses = action.payload;
      })
      .addCase(fetchPublishedCourses.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const {
  nextStep,
  prevStep,
  updateCourse,
  addSection,
  addLecture,
  updatePricing,
  resetCourse,
  resetCurrentCourse,
} = courseSlice.actions;

export default courseSlice.reducer;
