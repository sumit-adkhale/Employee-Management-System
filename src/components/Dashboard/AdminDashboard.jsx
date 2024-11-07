import React from "react";
import Header from "../OtherCompo/Header";
import CreateTask from "../OtherCompo/CreateTask";
import AllTask from "../OtherCompo/AllTask";

function AdminDashboard({ changeUser }) {
  return (
    <div className=" w-full h-full p-10 bg-[#1c1c1c]">
      <Header changeUser={changeUser} />
      <CreateTask />
      <AllTask />
    </div>
  );
}

export default AdminDashboard;
