"use client";
import { combineReducers, configureStore  } from "@reduxjs/toolkit";
import counterReducer from "./cartSlice";
import ImageReducer from "./imageSlice";


const rootReducer = combineReducers({
  counter: counterReducer,
  productImage: ImageReducer
  //add all your reducers here
},);

export const store = configureStore({
  reducer: rootReducer,

});