import React from "react";

function login() {
  return (
    <div className="container mx-auto px-4 py-8 w-screen h-screen">
      <div className="flex items-center w-full h-full ">
        <div className="w-1/2 text-center items-center px-16">
          <div className="py-6">
            <h1 className="text-3xl font-semibold">Sign in to Overpay</h1>
            <p className="mt-2 text-sm text-gray-900">
              Send, spend and save smarter
            </p>
          </div>
          <div className="py-6 flex justify-center">
            <button className="w-full border py-2 mx-2 rounded-xl hover:bg-gray-100">
              Sign with Google
            </button>
            <button className="w-full border py-2 mx-2 rounded-xl hover:bg-gray-100">
              Sign with Apple
            </button>
          </div>
          <div className="mt-10 py-10 border-t">
            <h1 className="mb-1 text-left text-sm">Username</h1>
            <input
              className="w-full border py-2 px-2 rounded-lg"
              placeholder="email@example.com"
              type="text"
            ></input>
            <h1 className="mt-6 mb-1 text-left text-sm">Password</h1>
            <input
              className="w-full border py-2 px-2 rounded-lg"
              placeholder="Password"
              type="text"
            ></input>
            <div className="py-6 flex justify-between">
              <p className="text-sm text-blue-600 font-semibold">Remember me</p>
              <p className="text-sm">Forgot Password?</p>
            </div>
            <button
              className="w-full border py-3 rounded-xl text-lg bg-blue-600 text-white font-semibold hover:bg-blue-700"
              type="submit"
            >
              Sign In
            </button>
            <p className="mt-6">
              {"Don't have an account? "}
              <span className="font-bold">Sign Up</span>
            </p>
          </div>
        </div>

        <div className="w-1/2 h-full bg-blue-400">fdf</div>
      </div>
    </div>
  );
}

export default login;
