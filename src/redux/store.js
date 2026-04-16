import {configureStore} from '@reduxjs/toolkit';
import courseReducer from './course/courseSlice';
import instuctorReducer from './Instructor/InstructorSlice';
import authReducer from './auth/authSlice';

export const store = configureStore({
    reducer: {
        courses: courseReducer,
        instructor: instuctorReducer,
        auth: authReducer,
    },
});