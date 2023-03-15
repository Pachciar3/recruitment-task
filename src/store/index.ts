import { configureStore } from "@reduxjs/toolkit";
import counter from "./reducers/counter";

const store = configureStore({
  reducer: {
    counter,
  },
});

export type CounterState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
