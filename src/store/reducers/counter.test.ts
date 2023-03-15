import { decrement, increment, incrementBy, selectCount } from "./counter";
import store from "..";

test("should increment properly", () => {
  expect(selectCount(store.getState().counter)).toBe(0);
  store.dispatch(increment());
  expect(selectCount(store.getState().counter)).toBe(1);
});

test("should decrement properly", () => {
  expect(selectCount(store.getState().counter)).toBe(1);
  store.dispatch(decrement());
  expect(selectCount(store.getState().counter)).toBe(0);
});

test("should incrementBy10 properly", () => {
  expect(selectCount(store.getState().counter)).toBe(0);
  store.dispatch(incrementBy(10));

  expect(selectCount(store.getState().counter)).toBe(10);
});
