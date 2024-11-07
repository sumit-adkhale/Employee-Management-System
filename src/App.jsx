import { useContext, useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { setLocalStorage } from "./utils/LocalStorage";
import AuthContext, { AuthContexts } from "./Context/AuthContext";

function App() {
  const [user, setUser] = useState(null);

  const [loggedInUserData, setLoggedInUserData] = useState(null);

  const [userData, setUserData] = useContext(AuthContexts);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
  }, []);

  useEffect(() => {
    if (user === "employee" && loggedInUserData) {
      const updatedEmployeeData = userData.find(
        (e) => e.id === loggedInUserData.id
      );
      if (updatedEmployeeData) {
        setLoggedInUserData(updatedEmployeeData);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: updatedEmployeeData })
        );
      }
    }
  }, [userData, user, loggedInUserData]);

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == 123) {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (userData) {
      const employee = userData.find(
        (e) => email == e.email && e.password == password
      );
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
      }else {
        alert("Invalid Credentials");
      }
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? (
        <AdminDashboard changeUser={setUser} />
      ) : user == "employee" ? (
        <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />
      ) : null}
    </>
  );
}

export default App;
