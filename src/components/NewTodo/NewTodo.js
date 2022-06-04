import TodoForm from "./TodoForm";
import styles from "./NewTodo.module.css";
import { useState } from "react";

const NewTodo = (props) => {
  const [isVisible, setIsVisible] = useState(false);

  const saveNewTodoDataHandler = (newTodoData) => {
      console.log(newTodoData)
  }
  const hideNewTodoDataForm = () => {
      setIsVisible(!isVisible)
  }
  return (
    <div className={`${styles["new-todo"]}`}>
      {isVisible ? (
        <TodoForm onSaveNewTodoData={saveNewTodoDataHandler}></TodoForm>
      ) : (
        <button onClick={hideNewTodoDataForm}>Add New Todo</button>
      )}
    </div>
  );
};
export default NewTodo;
