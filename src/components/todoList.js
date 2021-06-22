import React from "react";

function TodoList(props) {
  const { todos, onTodoClick } = props;

  const handleClick = (todo) => {
    if (onTodoClick) {
      onTodoClick("anh anh iu ơi");
    }
  };

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} onClick={() => handleClick(todo)}>
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
