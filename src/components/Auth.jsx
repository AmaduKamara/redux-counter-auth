import React from "react";

const Auth = () => {
  return (
    <div className="flex justify-center items-center my-12">
      <div className="w-[800px] shadow-xl bg-white p-6 rounded-md">
        <h1 className="font-bold text-3xl text-cyan-500 text-center">Login</h1>
        <form className="my-8">
          <div className="mt-3">
            <label htmlFor="email" className="text-lg texg-gray-600">
              Email
            </label>
            <input
              type="text"
              placeholder="Email"
              className="border py-2 px-4 w-full rounded-md mt-1"
            />
          </div>
          <div className="mt-3">
            <label htmlFor="email" className="text-lg texg-gray-600">
              Password
            </label>
            <input
              type="password"
              placeholder="Passsword"
              className="border py-2 px-4 w-full rounded-md mt-1"
            />
          </div>
          <div className="mt-5">
            <button
              type="submit"
              className="border border-cyan-500 hover:text-white bg-cyan-500 hover:bg-cyan-600 text-white py-3 px-6 rounded-md shadow-xl cursor-pointer w-full"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Auth;
