"use client";
import { combineReducers, configureStore  } from "@reduxjs/toolkit";
import counterReducer from "../app/ecommerce-product-page/reduxSlice/cartSlice";
import ImageReducer from "../app/ecommerce-product-page/reduxSlice/imageSlice";
import darkmodeReducer from './darkmodeSlice';


const rootReducer = combineReducers({

  counter: counterReducer,
  imageIndex: ImageReducer,
  darkmode: darkmodeReducer
  //add all your reducers here

  },

);

export const store = configureStore({
  reducer: rootReducer,
});