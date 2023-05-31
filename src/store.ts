import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "./reducers/PlayerSlice";

const store = configureStore({
  reducer: {
    players: playerReducer,
  },
});

export default store;
