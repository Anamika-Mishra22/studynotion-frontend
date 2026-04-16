import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    myCources:[],
};

const InstructorSlice = createSlice({
    name: 'instructor',
    initialState,
    reducers: {
        setMyCources: (state, action) => {
            state.myCources = action.payload;
        },
        publishCources: (state, action) => {
            // Implement the logic for publishing courses here
            state.myCources.push(action.payload);
        }
    },
});

export const {setMyCources, publishCources} = InstructorSlice.actions;
export default InstructorSlice.reducer;