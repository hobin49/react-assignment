import React, { useState } from 'react'
import styles from "../styles/TodoList.module.css"


const TodoList = () => {
  // 현재 input에 입력한 값을 받아오는 함수
  const [todo, setTodo] = useState("");
  // 배열에 값을 저장하는 함수
  const [todos, setTodos] = useState([]);
  const submitTodo = (event) => {
    event.preventDefault();
    if(todo !== "") {
      // 새로운 값을 배열에 추가하려면 기존에 있는 배열에 더해준다.
      setTodos([...todos, todo])
    }
    setTodo("");
  }

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  // 삭제 함수
  const remove = (index) => {
    // 일단 배열을 가져와
    const newTodos = [...todos];
    // splice()메서드로 삭제하고
    newTodos.splice(index, 1);
    // 삭제하고 나서 새로 업데이트
    setTodos(newTodos);
  }

  return (
    <div className={styles.divBox}>
      <form onSubmit={submitTodo}>
        <input type='text' value={todo} onChange={handleChange} placeholder='To-do-list' className={styles.todoList}/>
      </form>
    <div className={styles.todoContainer}>
        {todos.map((todo, index) => (
          <div key={index}>
            {todo}
            <button onClick={() => remove(index)} className={styles.removeBtn}>삭제</button>
          </div>
        ))}
    </div>
  </div>
  )
}

export default TodoList
