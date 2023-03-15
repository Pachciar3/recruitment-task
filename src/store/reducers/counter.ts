import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  amount: number;
}

const initialState: CounterState = {
  amount: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.amount++;
    },
    decrement(state) {
      state.amount--;
    },
    incrementBy(state, action: PayloadAction<number>) {
      state.amount += action.payload;
    },
  },
});

export const { increment, decrement, incrementBy } = counterSlice.actions;
export const selectCount = (state: CounterState) => state.amount;

export default counterSlice.reducer;
