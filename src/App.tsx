import "./App.css";
import Counter from "./components/Counter/Counter";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <h1>React + Redux app</h1>
      <Counter />
      <Search />
    </div>
  );
}

export default App;
