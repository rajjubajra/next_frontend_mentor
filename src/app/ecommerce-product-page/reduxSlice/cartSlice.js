"use client"; //this is a client side component

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0, 
  cartView: false
};// the initial state for the slice

export const counterSlice = createSlice({
  name: "counter",// the name for the slice, used in action type strings
  initialState,
  reducers: {
    // defining reducer functions as part of the slice
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      if(state.value !== 0)
      state.value -= 1;
    },
    removeItem: (state) => {
      state.value = 0
    },
    cartViewState: (state) => {
      state.cartView ? state.cartView = false : state.cartView = true
    },
    cartClose: (state) => {
      state.cartView = false
    },
    // additional reducers 
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, removeItem, cartViewState, cartClose, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer;