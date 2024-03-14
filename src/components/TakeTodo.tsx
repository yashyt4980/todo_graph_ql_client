import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_TODO } from "../graphql/Queries";
const TakeTodo = () => {
  const [addTask, { data }] = useMutation(ADD_TODO);
  if(data) console.log(data);
  const [ todo, setTodo ] = useState({
    task: "",
    deadLine:""
  });

  const handleChange = (e: { target: { name: string; value: string; }; }) => {
    setTodo({
      ...todo, [e.target.name] : e.target.value
    });
  }
  const add = async () => {
    addTask({ variables: { task: todo.task, deadline: todo.deadLine } });
  };
  return (
    <div>
      <input type="text" placeholder="task" name="task" value={todo.task} onChange={(handleChange)} />
      <input
        type="text"
        placeholder="deadline"
        name="deadLine"
        value={todo.deadLine}
        onChange={handleChange}
      />
      <button onClick={add}>Add Task</button>
    </div>
  );
};

export default TakeTodo;
