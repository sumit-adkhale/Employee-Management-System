import React from "react";

function TaskNumber({ data }) {
  return (
    <div className="flex mt-10 gap-2 justify-between items-start w-full">
      <div className="w-[24%] rounded-xl shrink-0 bg-red-500 px-8 py-5">
        <h2 className="text-3xl">{data.task_count.new}</h2>
        <h3 className="text-xl">New Task</h3>
      </div>
      <div className="w-[24%] rounded-xl shrink-0 bg-blue-500 px-8 py-5">
        <h2 className="text-3xl">{data.task_count.complete}</h2>
        <h3 className="text-xl">Completed Task</h3>
      </div>
      <div className="w-[24%] rounded-xl shrink-0 bg-green-500 px-8 py-5">
        <h2 className="text-3xl">{data.task_count.active}</h2>
        <h3 className="text-xl">Accepted Task</h3>
      </div>
      <div className="w-[24%] rounded-xl shrink-0 bg-yellow-500 px-8 py-5">
        <h2 className="text-3xl">{data.task_count.failed}</h2>
        <h3 className="text-xl">Failed Task</h3>
      </div>
    </div>
  );
}

export default TaskNumber;
