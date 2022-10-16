import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import TaskItem from "./TaskItem";
// import background from "../assets/background.";
import useLocalStorage from "../hooks/useLocalStorage";
import { useNameContext } from "../context/nameContext";

function TaskManager() {
  const { data, setValue } = useLocalStorage("tasks", []);
  const [input, setInput] = useState("");
  const { name } = useNameContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === "") return;

    const newTask = {
      id: uuid(),
      text: input,
      completed: false,
    };

    setValue(newTask);
    setInput("");
  };

  const handleDelete = (id) => {
    const newTasks = data.filter((task) => task.id !== id);
    console.log(newTasks);
    setValue(newTasks);
  };

  return (
    <div className="h-screen w-screen bg-blue-800 flex justify-center items-center rounded-xl px-5 py-10">
      <div className="max-w-xl w-full max-h-96 bg-white p-8 rounded-lg z-10">
        <h3 className="text-3xl text-center my-5">Welcome, {name}!</h3>
        <form
          onSubmit={handleSubmit}
          className="space-x-5 flex w-[30rem] mb-10"
        >
          <input
            type="text"
            className="border-2 border-blue-400 p-2 rounded-md outline-none w-10/12"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />

          <button
            type="submit"
            className="bg-blue-600 text-white text-lg py-2 px-7 rounded-md cursor-pointer"
            disabled={input === ""}
          >
            Add
          </button>
        </form>

        <div className="space-y-2 overflow-y-auto h-56">
          {data.map((task) => (
            <TaskItem task={task} handleDelete={handleDelete} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TaskManager;
