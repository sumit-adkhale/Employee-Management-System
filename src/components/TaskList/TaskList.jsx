import React, { useContext } from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import { AuthContexts } from "../../Context/AuthContext";

function TaskList({ data }) {
  const [userData, setUserData] = useContext(AuthContexts);

  const handleAcceptTask = (employeeId, taskIndex) => {
    // Deep copy of userData to prevent state mutation
    const updatedUserData = userData.map((employee) => {
      if (employee.id === employeeId) {
        const updatedTasks = employee.tasks.map((task, index) => {
          if (index === taskIndex) {
            return { ...task, active: true, new: false }; // Set active to true and new to false
          }
          return task;
        });

        // Update task_count without going below zero
        const newTaskCount = Math.max(employee.task_count.new - 1, 0);
        const activeTaskCount = employee.task_count.active + 1;

        return {
          ...employee,
          tasks: updatedTasks,
          task_count: {
            ...employee.task_count,
            new: newTaskCount,
            active: activeTaskCount,
          },
        };
      }
      return employee;
    });

    setUserData(updatedUserData); // Update state for immediate re-render
    localStorage.setItem("employees", JSON.stringify(updatedUserData)); // Persist in localStorage
  };
  const handleCompleteTask = (employeeId, taskIndex) => {
    // Deep copy of userData to prevent state mutation
    const updatedUserData = userData.map((employee) => {
      if (employee.id === employeeId) {
        const updatedTasks = employee.tasks.map((task, index) => {
          if (index === taskIndex) {
            return { ...task, active: false, new: false, complete: true }; // Set active to true and new to false
          }
          return task;
        });

        // Update task_count without going below zero
        const newTaskCount = Math.max(employee.task_count.new - 1, 0);
        const activeTaskCount = employee.task_count.active - 1;
        const completeTaskCount = employee.task_count.complete + 1;

        return {
          ...employee,
          tasks: updatedTasks,
          task_count: {
            ...employee.task_count,
            new: newTaskCount,
            active: activeTaskCount,
            complete: completeTaskCount,
          },
        };
      }
      return employee;
    });

    setUserData(updatedUserData);
    localStorage.setItem("employees", JSON.stringify(updatedUserData));
  };
  const handleFailedTask = (employeeId, taskIndex) => {
    const updatedUserData = userData.map((employee) => {
      if (employee.id === employeeId) {
        const updatedTasks = employee.tasks.map((task, index) => {
          if (index === taskIndex) {
            return { ...task, active: false, new: false, failed: true };
          }
          return task;
        });

        const newTaskCount = Math.max(employee.task_count.new - 1, 0);
        const activeTaskCount = employee.task_count.active - 1;
        const failedTaskCount = employee.task_count.failed + 1;

        return {
          ...employee,
          tasks: updatedTasks,
          task_count: {
            ...employee.task_count,
            new: newTaskCount,
            active: activeTaskCount,
            failed: failedTaskCount,
          },
        };
      }
      return employee;
    });

    setUserData(updatedUserData);
    localStorage.setItem("employees", JSON.stringify(updatedUserData));
  };

  return (
    <div
      id="TaskList"
      className="w-full flex h-[55%] overflow-x-auto gap-5 p-3 mt-10"
    >
      {data.tasks.map((task, idx) => {
        if (task.active) {
          return (
            <AcceptTask
              key={idx}
              data={task}
              onComplete={() => handleCompleteTask(data.id, idx)}
              onFailed={() => handleFailedTask(data.id, idx)}
            />
          );
        }
        if (task.new) {
          return (
            <NewTask
              key={idx}
              data={task}
              onAccept={() => handleAcceptTask(data.id, idx)}
            />
          );
        }
        if (task.complete) {
          return <CompleteTask key={idx} data={task} />;
        }
        if (task.failed) {
          return <FailedTask key={idx} data={task} />;
        }
        return null;
      })}
    </div>
  );
}

export default TaskList;
