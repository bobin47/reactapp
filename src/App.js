//import { useState } from "react";
import "./App.css";
import ShoesList from "./components/shoes/shoseLsit";

// import TodoList from "./components/todoList";

function App() {
  // const [todoList, setToDoList] = useState([
  //   { id: 1, title: "chuong" },
  //   { id: 2, title: "minh" },
  //   { id: 3, title: "cuong" },
  // ]);

  // const handleTodoClicks = (todo) => {
  //   console.log(todo);
  // };

  return (
    <div>
      {/* <ColorBox></ColorBox> */}
      {/* <TodoList todos={todoList} onTodoClick={handleTodoClicks}></TodoList> */}
      <ShoesList></ShoesList>
    </div>
  );
}

export default App;
