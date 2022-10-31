import React from "react";

function signup() {
  return (
    <div class="container mx-auto px-4 py-8 w-screen h-screen">
      <div class="flex items-center w-full h-full ">
        <div class="w-full lg:w-1/2 text-center items-center px-4 xl:px-32">
          <div class="py-6">
            <h1 class="text-3xl font-semibold">Sign in to <span className="font-bold text-blue-800">Overpay</span></h1>
            <p class="mt-2 text-sm text-gray-900">
              Send, spend and save smarter
            </p>
          </div>
          <div class="py-6 flex justify-center">
            <button class="w-full border py-2 mx-2 rounded-xl hover:bg-gray-100">
              Sign with Google
            </button>
            <button class="w-full border py-2 mx-2 rounded-xl hover:bg-gray-100">
              Sign with Apple
            </button>
          </div>
          <div class="mt-10 py-10 border-t">
            <div class="flex gap-x-4">
              <div class="w-full">
                <h1 class="mb-1 text-left text-sm">Name</h1>
                <input
                  class="w-full border py-2 px-2 rounded-lg"
                  placeholder="email@example.com"
                  type="text"
                ></input>
              </div>
              <div class="w-full">
                <h1 class="mb-1 text-left text-sm">Surname</h1>
                <input
                  class="w-full border py-2 px-2 rounded-lg"
                  placeholder="email@example.com"
                  type="text"
                ></input>
              </div>
            </div>
            <h1 class="mt-4 mb-1 text-left text-sm">Email</h1>
            <input
              class="w-full border py-2 px-2 rounded-lg"
              placeholder="email@example.com"
              type="text"
            ></input>
            <h1 class="mt-4 mb-1 text-left text-sm">Password</h1>
            <input
              class="w-full border py-2 px-2 rounded-lg"
              placeholder="Password"
              type="text"
            ></input>

            <div class="py-6 flex justify-between">
              <p class="text-sm text-blue-600 font-semibold cursor-pointer hover:text-blue-800">
                Remember me
              </p>
              <p class="text-sm cursor-pointer hover:text-gray-800">
                Forgot Password?
              </p>
            </div>

            <button
              class="w-full border py-3 rounded-xl text-lg bg-blue-600 text-white font-semibold hover:bg-blue-700"
              type="submit"
            >
              Sign Up
            </button>
            <p class="mt-6">
              Have an account?{" "}
              <span class="font-bold cursor-pointer hover:text-gray-800">
                Log In
              </span>
            </p>
          </div>
        </div>

        <div class="w-0 lg:w-1/2 h-full bg-blue-400"></div>
      </div>
    </div>
  );
}

export default signup;
