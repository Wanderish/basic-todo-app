import { useState } from "react";
import styles from "./TodoForm.module.css";
const TodoForm = (props) => {
  const [currentTitle, setTitle] = useState("");
  const [currentPriority, setPriority] = useState("");
  const [currentDueDate, setDueDate] = useState("");

  const titleHandler = () => {
    setTitle(event.target.value);
  };

  const priorityHandler = () => {
    setPriority(event.target.value);
  };

  const dateHandler = () => {
    setDueDate(event.target.value);
  };

  const formSubmitHandler = () => {
    event.preventDefault();
    const data = {
      title: currentTitle,
      priority: currentPriority,
      dueDate: new Date(currentDueDate),
    };
    props.onSaveNewTodoData(data);
    //reset values
    setTitle("");
    setPriority("");
    setDueDate("");
  };

  return (
    <form action="" onSubmit={formSubmitHandler}>
      <div className={`${styles["new-todo__controls"]}`}>
        <div className={`${styles["new-todo__control"]}`}>
          <label htmlFor="todoName">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            onChange={titleHandler}
            value={currentTitle}
          />
        </div>
        <div className={`${styles["new-todo__control"]}`}>
          <label htmlFor="priority">Priority</label>
          <select
            name="priority"
            id="priority"
            onChange={priorityHandler}
            value={currentPriority}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <div className={`${styles["new-todo__control"]}`}>
          <label htmlFor="duedate">Due Date</label>
          <input
            type="date"
            name="duedate"
            id="duedate"
            onChange={dateHandler}
            min="2019-01-01"
            max="2022-12-31"
            value={currentDueDate}
          />
        </div>
      </div>
      <div className={`${styles["new-todo__actions"]}`}>
        <button type="button" onClick={props.onCancelNewTodo}>
          Cancel
        </button>
        <button type="submit">Add Todo</button>
      </div>
    </form>
  );
};

export default TodoForm;
