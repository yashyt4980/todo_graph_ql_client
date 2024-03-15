import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_TODO, UPDATE_TODO } from "../graphql/Queries";
import { ObjectId } from "mongodb";
const HandleTodo = ({task_, deadLine_, update, _id} : { task_: string, deadLine_: string, update: boolean, _id?: string | ObjectId }) => {
  const [addTask, { data: addedTask }] = useMutation(ADD_TODO);
  const [updateTask, { data: updatedTask }] = useMutation(UPDATE_TODO);
  console.log(`HandleTodo.tsx -> ${addedTask} ${updatedTask}`);
  const [ todo, setTodo ] = useState({
    task: task_,
    deadLine: deadLine_
  });

  const handleChange = (e: { target: { name: string; value: string; }; }) => {
    setTodo({
      ...todo, [e.target.name] : e.target.value
    });
  }

  const add = async () => {
    if(todo.task !== "" && todo.deadLine !== "") {
      const addedTask = await addTask({ variables: { task: todo.task, deadline: todo.deadLine } });
      if(addedTask) alert(" Task added successfully, refresh page!");
    }
    else alert(" Enter all details ");
  };

  const updateTodo = async() => {
    await updateTask({variables: {task: todo.task, deadline: todo.deadLine, _id}});
  };

  return (
    <div>
      <input className = "border-2 m-2" type="text" placeholder="Task" name="task" value={todo.task} onChange={(handleChange)} required/>
      <input
        className = "border-2 m-2"
        type="text"
        placeholder="Deadline"
        name="deadLine"
        value={todo.deadLine}
        onChange={handleChange}
        required
      />
      <button className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={update ? updateTodo : add}>{update? 'Update Task' : 'Add Task'}</button>
    </div>
  );

};

export default HandleTodo;
