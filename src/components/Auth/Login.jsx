import React, { useContext, useState } from "react";
import { AuthContexts } from "../../Context/AuthContext";

function Login({ handleLogin }) {
  const [userData, setUserData] = useContext(AuthContexts);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
    handleLogin(email, password);
    e.target.reset();
  };
  return (
    <>
      <div className="text-center text-xl m-2 text-red-500">
        Scroll Down for User Id and Passwords
      </div>
      <div className="w-full h-full flex justify-center items-center">
        <div className="flex rounded-lg flex-col justify-center items-center border-2 border-sky-500 shadow-lg shadow-white px-20 py-32">
          <h1 className="text-5xl font-bold">Login Here</h1>
          <form
            onSubmit={(e) => submitHandler(e)}
            className="flex flex-col justify-center items-center mt-20"
          >
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
              className="w-60 rounded-full px-6 py-1 border-2 border-red-600 bg-transparent  font-bold"
              type="email"
              placeholder="Enter Email Id"
            />
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
              className="my-5 w-60 rounded-full px-6 py-1 border-2 border-red-600 bg-transparent  font-bold"
              type="password"
              placeholder="Enter Password"
            />
            <button
              className="w-60 rounded-full px-6 py-1 border-2 border-none bg-emerald-500 text-black font-bold"
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      </div>
      <div class="relative flex w-96 flex-col rounded-lg border border-slate-200 bg-transparent shadow-sm mt-20 mb-10 mx-auto ">
        <nav class="flex min-w-[240px] flex-col gap-1 p-1.5">
          <div
            role="button"
            class="text-slate-800 flex w-full items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
          >
            <div class="mr-4 grid place-items-center">
              <img
                alt="candice"
                src="admin.png"
                class="relative inline-block h-12 w-12 !rounded-full  object-cover object-center"
              />
            </div>
            <div>
              <h6 class="text-blue-800 font-  ">Admin</h6>
              <p class="text-slate-500 text-sm">Master Login</p>
              <h6 className="text-pink-700 text-sm">Email Id - admin@me.com</h6>
              <h6 className="text-pink-700 text-sm">Password - 123</h6>
            </div>
          </div>
          {userData.map((e) => {
            console.log(userData);

            return (
              <div
                role="button"
                class="text-slate-800 flex w-full items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
              >
                <div class="mr-4 grid place-items-center">
                  <img
                    alt="candice"
                    src="employee.png"
                    class="relative inline-block h-12 w-12 !rounded-full  object-cover object-center"
                  />
                </div>
                <div>
                  <h6 class="text-blue-800 font-  ">{e.first_name}</h6>
                  <p class="text-slate-500 text-sm">Employee Id : {e.id}</p>
                  <h6 className="text-pink-700 text-sm">
                    Email Id - {e.email}
                  </h6>
                  <h6 className="text-pink-700 text-sm">Password - 123</h6>
                </div>
              </div>
            );
          })}
        </nav>
      </div>
    </>
  );
}

export default Login;
