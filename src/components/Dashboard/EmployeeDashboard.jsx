import React from "react";
import Header from "../OtherCompo/Header";
import TaskNumber from "../OtherCompo/TaskNumber";
import TaskList from "../TaskList/TaskList";

function EmployeeDashboard({ data, changeUser }) {
  return (
    <div className="w-screen p-10 h-screen bg-[#1c1c1c]">
      <Header data={data} changeUser={changeUser} />
      <TaskNumber data={data} />
      <TaskList data={data} />
    </div>
  );
}

export default EmployeeDashboard;
