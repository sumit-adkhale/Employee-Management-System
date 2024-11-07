import React, { useContext, useState } from "react";
import { AuthContexts } from "../../Context/AuthContext";
import { setLocalStorage } from "../../utils/LocalStorage";

function CreateTask() {
  const [userData, setUserData] = useContext(AuthContexts);

  let [title, setTaskTitle] = useState("");
  let [date, setTaskDate] = useState("");
  let [assignTo, setAssignTo] = useState("");
  let [category, setTaskCategory] = useState("");
  let [description, setTaskDisc] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const newTask = {
      title,
      date,
      category,
      description,
      active: false,
      new: true,
      failed: true,
      complete: false,
    };
    const updatedUserData = [...userData];

    updatedUserData.forEach((e) => {
      if (assignTo == e.first_name) {
        e.tasks.push(newTask);
        e.task_count.new = e.task_count.new + 1;
      }
    });

    setUserData(updatedUserData);

    localStorage.setItem("employees", JSON.stringify(updatedUserData));
    setTaskTitle("");
    setTaskDate("");
    setAssignTo("");
    setTaskCategory("");
    setTaskDisc("");
  };

  return (
    <div className="w-full mt-10">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex flex-wrap w-full justify-between items-start"
      >
        <div className="w-1/2 px-10">
          <div>
            <h3>Task Title</h3>
            <input
              value={title}
              onChange={(e) => {
                setTaskTitle(e.target.value);
              }}
              type="text"
              className="w-full outline-none bg-transparent border-2 border-zinc-500 rounded px-4"
              placeholder="Assigned task name"
            />
          </div>
          <div className="mt-4">
            <h3>Date</h3>
            <input
              value={date}
              onChange={(e) => {
                setTaskDate(e.target.value);
              }}
              type="date"
              className="w-full outline-none bg-transparent border-2 border-zinc-500 rounded px-4"
            />
          </div>
          <div className="mt-4">
            <h3>Assign To</h3>
            <input
              value={assignTo}
              onChange={(e) => {
                setAssignTo(e.target.value);
              }}
              type="text"
              className="w-full outline-none bg-transparent border-2 border-zinc-500 rounded px-4"
              placeholder="Employee Name"
            />
          </div>
          <div className="mt-4">
            <h3>Category</h3>
            <input
              value={category}
              onChange={(e) => {
                setTaskCategory(e.target.value);
              }}
              type="text"
              className="w-full outline-none bg-transparent border-2 border-zinc-500 rounded px-4"
              placeholder="Design,dev,etc . ."
            />
          </div>
        </div>
        <div className="w-1/2">
          <h3>Discription</h3>
          <textarea
            value={description}
            onChange={(e) => {
              setTaskDisc(e.target.value);
            }}
            name=""
            id=""
            className="w-full outline-none bg-transparent border-2 border-zinc-500 rounded px-4"
            cols="30"
            rows="7"
          ></textarea>
          <button className="w-full bg-emerald-700 rounded p-2 mt-4 font-semibold">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateTask;
