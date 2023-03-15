import { useAppSelector, useAppDispatch } from "..//../hooks";
import {
  decrement,
  increment,
  incrementBy,
} from "../../store/reducers/counter";

export default function Counter() {
  const count = useAppSelector((state) => state.counter.amount);
  const dispatch = useAppDispatch();
  const handleRemoveClick = () => dispatch(decrement());
  const handleAddClick = () => dispatch(increment());
  const handleAdd10Click = () => dispatch(incrementBy(10));

  return (
    <div className="card">
      <div>count is {count}</div>
      <button onClick={handleRemoveClick}>Remove</button>
      <button onClick={handleAddClick}>Add </button>
      <button onClick={handleAdd10Click}>Add 10 </button>
    </div>
  );
}
