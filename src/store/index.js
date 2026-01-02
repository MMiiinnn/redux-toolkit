import { configureStore } from "@reduxjs/toolkit";
import autheReducer from "./auth";
import counterReducer from "./counter";

const store = configureStore({
  reducer: { counter: counterReducer, auth: autheReducer },
});

export default store;
