import React, { useState } from "react";

import { AiOutlineBell } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { BsCheckAll } from "react-icons/bs";
import { RiArrowDownSFill, RiMenuLine } from "react-icons/ri";

import {
  RiAccountCircleLine,
  RiSettings5Line,
  RiLogoutBoxLine,
} from "react-icons/ri";

function Navbar({ isSidebarOpen, setIsSidebarOpen }) {
  const [usermenuOpen, setUsermenuOpen] = useState(false);
  const [notification, setNotification] = useState(false);

  return (
    <div className="sticky top-0 w-full h-fit py-8 flex justify-between items-center bg-white">
      <div className="flex gap-4">
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          <RiMenuLine className="text-xl" />
        </button>

        <h1 className="text-2xl font-bold">Dashbord</h1>
      </div>

      <div className="flex items-center gap-x-6">
        <AiOutlineSearch className="w-10 h-10 p-2 rounded-full hover:bg-gray-100" />
        <AiOutlineBell
          onClick={() => setNotification(!notification)}
          className="w-10 h-10 p-2 rounded-full hover:bg-gray-100"
        />
        <div
          className="h-fit py-2 px-4 flex items-center gap-x-4 rounded-2xl hover:bg-gray-100 "
          onClick={() => setUsermenuOpen(!usermenuOpen)}
        >
          <div className="w-8 h-8 bg-red-200 rounded-full"></div>
          <div className="flex items-center gap-x-1">
            <h1 className="font-semibold">Alesia K.</h1>
            <RiArrowDownSFill className="w-6 h-6" />
          </div>
        </div>
      </div>

      {usermenuOpen ? (
        <div className="absolute w-64 top-20 right-4 p-5 bg-white border rounded-xl shadow-xl">
          <div className="">
            <h1 className="font-bold">Alesia Karapova</h1>
            <h1 className="mt-1 text-sm text-gray-500">Persoanl Account</h1>
          </div>
          <div className="flex flex-col py-4 my-4 border-y text-gray-700 ">
            <div className="flex gap-2 -mx-4 px-4 py-2 items-center rounded-xl hover:bg-gray-100">
              <RiAccountCircleLine className="text-xl " />
              <h1 className="font-semibold">Your details</h1>
            </div>
            <div className="flex gap-2 -mx-4 px-4  py-2 items-center rounded-xl hover:bg-gray-100">
              <RiSettings5Line className="text-xl " />
              <h1>Account Setting</h1>
            </div>
            <div className="flex gap-2 -mx-4 px-4  py-2 items-center rounded-xl hover:bg-gray-100">
              <RiLogoutBoxLine className="text-xl " />
              <h1>Log Out</h1>
            </div>
          </div>
          <div className="flex justify-between -mx-4 px-4 -my-2 py-2 rounded-xl hover:bg-gray-100">
            <h1 className="font-semibold">Dark Mode</h1>
            <input type="checkbox" />
          </div>
        </div>
      ) : (
        ""
      )}

      {notification ? (
        <div className="absolute w-96 top-20 right-4 p-5 bg-white border rounded-xl shadow-xl">
          <div className="flex items-center justify-between pb-2 border-b ">
            <h1 className="font-semibold">Notification</h1>
            <button className="flex items-center gap-1 text-sm py-1 px-4 text-blue-600 font-bold rounded-xl hover:bg-blue-100">
              <BsCheckAll className="text-xl" /> Mark all as read
            </button>
          </div>
          <div className="py-4">
            <div className="py-2 flex gap-4">
              <img
                className="w-10 h-10 object-cover rounded-full"
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80"
                alt=""
              />
              <div>
                <h1 className="font-semibold">Tanner Stafford</h1>
                <h1 className="text-sm text-gray-600">
                  You have sent <span className="text-red-600">$200.00</span> to{" "}
                  <span className="font-semibold text-black">
                    Tanner Stafford
                  </span>
                </h1>
                <h1 className="mt-1 text-xs font-semi text-gray-400">
                  2 mins ago
                </h1>
              </div>
            </div>
            <div className="py-2 flex gap-4">
              <img
                className="w-10 h-10 object-cover rounded-full"
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80"
                alt=""
              />
              <div>
                <h1 className="font-semibold">Alesia</h1>
                <h1 className="text-sm text-gray-600">
                  You have a new payment request from{" "}
                  <span className="font-semibold text-black">Alesia</span> for
                  <span className="text-red-600"> 390.00</span>
                </h1>
                <h1 className="mt-1 text-xs font-semi text-gray-400">
                  1 hour ago
                </h1>
                <div className="mt-4 flex justify-around">
                  <button className="w-2/5 py-2 text-sm font-semibold border border-gray-400 rounded-lg hover:bg-red-200 hover:border-red-200">
                    Decline
                  </button>
                  <button className="w-2/5 py-2 text-sm text-white font-semibold rounded-xl bg-blue-600 hover:bg-blue-800 ">
                    Pay Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="pt-2 border-t">
              <button className="text-sm py-1 px-4 text-blue-600 font-bold rounded-xl hover:bg-blue-100">
                See all notifications
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Navbar;
