import InputName from "./components/InputName";
import Background from "./components/Background";
import Clock from "./components/Clock";
import TodoList from "components/TodoList";
function App() {
  return (
    <div className="App">
      <Background />
      <Clock />
      <InputName />
      <TodoList />
    </div>
  );
}

export default App;
