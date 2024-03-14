import { useQuery } from "@apollo/client"
import { ObjectId } from "mongodb"
import { useEffect, useState } from "react"
import { FETCH_TODO } from "../graphql/Queries"

interface Task {
  task: string,
  deadline: string,
  _id: string | ObjectId
}
interface Data {
  getTasks?: Task[],
}

const ShowTodos = () => {
  const { data } = useQuery<Data>(FETCH_TODO);
  const [ tasks, setTasks ] = useState<Task[]>([]);
  useEffect(() => {
    if(data?.getTasks) setTasks(data.getTasks);
  }, [data])
  
  // Debug log 
  useEffect(() => {
    // console.log(tasks);
  }, [tasks])

  const editTask = () => {
    console.log("Edit task in Showtodo.tsx");
  }

  return (
    <div>{
      tasks.map((task) => {
        return (
          <div key = {task._id+""} className="flex-col border-2 rounded-md m-5 p-5">
            <div className = "flex gap-2">
            <h3 className="text-black">Task: </h3>
            <span className="text-cyan-600">{task.task}</span>
            </div>
            <div className="flex gap-2">
            <h3 className="text-black">Dealine:</h3>
            <span className="text-cyan-600">{task.deadline}</span>
            </div>
            <button className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={editTask}>Edit</button>
          </div>
        )
      })  
    }
    </div>
  )
}

export default ShowTodos