"use client"; //this is a client side component

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode_redux: 'light', 
};// the initial state for the slice


const darkmodeSlice = createSlice({
  name: "darkmode",// the name for the slice, used in action type strings
  initialState,
  reducers:{
    setDarkMode: (state, action) => {
      state.mode_redux = action.payload;
    }
  }

})

export const { setDarkMode } = darkmodeSlice.actions

export default darkmodeSlice.reducer;