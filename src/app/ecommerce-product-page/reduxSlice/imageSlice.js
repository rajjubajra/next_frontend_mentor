"use client"; //this is a client side component

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  index: 0,
  lightbox: false,
};

export const imageSlice = createSlice({
  name: 'imageIndex', 

  initialState,
  reducers:{
    //setImageIndex fuction
    setImageIndex: (state, action) => {
      console.log(state, action)
      state.index = action.payload;
    },
    goNext: (state) => {
      if(state.index !== 3)
      state.index += 1
    },
    goPrev: (state) => {
      if(state.index !== 0) 
      state.index -= 1
    },
    setLightBox: (state) => {
      state.lightbox ? state.lightbox = false : state.lightbox = true
    }
    //other reducers
  }


});

export const {setImageIndex, goNext, goPrev, setLightBox} = imageSlice.actions;


export default imageSlice.reducer;