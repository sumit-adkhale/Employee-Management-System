import React, { useContext } from "react";
import { AuthContexts } from "../../Context/AuthContext";

function AllTask() {
  const [userData, setUserData] = useContext(AuthContexts);

  return (
    <div className="w-full mt-5">
      <div className="w-[90%] mx-auto flex justify-between mb-3 items-center bg-red-500 rounded p-4">
        <h2 className="w-1/5 font-medium text-xl">Employee Name</h2>
        <h3 className="w-1/5 font-medium text-xl">New Task</h3>
        <h5 className="w-1/5 font-medium text-xl">Active Task</h5>
        <h5 className="w-1/5 font-medium text-xl">Completed</h5>
        <h5 className="w-1/5 font-medium text-xl">Failed</h5>
      </div>
      {userData.map((e, inx) => {
        return (
          <div
            key={inx}
            className="w-[90%] mx-auto flex justify-between mb-3 items-center border-emerald-500 border-4 rounded p-4"
          >
            <h2 className="w-1/5 font-medium text-lg">{e.first_name}</h2>
            <h3 className="w-1/5 font-medium text-lg text-blue-600">
              {e.task_count.new}
            </h3>
            <h5 className="w-1/5 font-medium text-lg text-yellow-500">
              {e.task_count.active}
            </h5>
            <h5 className="w-1/5 font-medium text-lg text-green-600">
              {e.task_count.complete}
            </h5>
            <h5 className="w-1/5 font-medium text-lg text-red-600">
              {e.task_count.failed}
            </h5>
          </div>
        );
      })}
    </div>
  );
}

export default AllTask;
