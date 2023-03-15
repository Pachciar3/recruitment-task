import reactLogo from "./assets/react.svg";
import "./App.css";
import Counter from "./components/Counter/Counter";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <div>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React</h1>
      <Counter /> <Search />
      <p className="read-the-docs">Click on the React logos to learn more</p>
    </div>
  );
}

export default App;
