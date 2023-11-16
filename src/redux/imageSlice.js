"use client"; //this is a client side component

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  index: 0,
};

export const imageSlice = createSlice({
  name: 'productImage', initialState,

  extraReducers: (builder) => {
    console.log("Image Builder: ",builder);

  }

});


export default imageSlice.reducer;