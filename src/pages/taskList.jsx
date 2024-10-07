import { useState, useEffect } from "react";

export default function TodoApp() {
  const [tasks, setTask] = useState([]);
  const [newTask, setNewTask] = useState([]);

  function addTask() {
    setTask([...tasks, newTask]);
    setNewTask('')
    console.log(newTask)
}

useEffect(() => {
    const saveTasks = JSON.parse(localStorage.getItem('tasks'))
    setTask(saveTasks)
}, [])

useEffect(() => {
        localStorage.setItem('tasks',JSON.stringify(tasks)), {tasks}
    })


  return (
    <div>
      <h1 className="text-center text-2xl">TASK LIST </h1>
      <div className="flex flex-col">
        <div className="flex flex-col items-center">
          <div className="flex p-2 justify-between border-white w-2/3 rounded bg-slate-400">
            <h2 className="text-xl">Tarea</h2>
            <input
              type="text"
              placeholder="Add a new task"
              className="w-60 text-black"
              value={newTask}
              onChange={(t) => setNewTask(t.target.value)}
            />
            <button
              onClick={addTask}
              className="mr-1 text-center border px-2 hover:bg-slate-800"
            >
              Añadir
            </button>
            <div></div>
          </div>
          <div className='my-5'>
            <ul>
              {tasks.map((task, index) => {
                return (
                  <li key={index} className="text-white">
                    {task}
                    <button className="ml-10 text-center border px-2 hover:bg-white hover:text-black">
                      Eliminar
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
