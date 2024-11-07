import React, { useEffect, useState } from "react";
import { setLocalStorage } from "../../utils/LocalStorage";

function Header({ data, changeUser }) {
  const [username, setUsername] = useState("");
  useEffect(() => {
    if (!data) {
      setUsername("Admin");
    } else {
      setUsername(data.first_name);
    }
  });
  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    changeUser("");
    // window.location.reload()
  };
  return (
    <div className="flex justify-between items-end">
      <h1 className="text-2xl">
        Hello, <br />{" "}
        <span className="text-3xl font-semibold">{username}👋</span>
      </h1>
      <button onClick={logOutUser} className="px-3 py-2 bg-red-600">
        Log Out
      </button>
    </div>
  );
}

export default Header;
