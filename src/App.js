import NewTodo from "./components/NewTodo/NewTodo";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Day 1 or One day?</h1>
      {/* fetch input from the user */}
      <div>
        <NewTodo></NewTodo>
      </div>
    </div>
  );
}

export default App;
