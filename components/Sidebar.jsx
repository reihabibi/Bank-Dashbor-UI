import React from "react";

import { SiStarlingbank } from "react-icons/si";
import {
  RiHome5Line,
  RiMessage2Line,
  RiHistoryLine,
  RiWalletLine,
} from "react-icons/ri";
import { MdOutlineAnalytics } from "react-icons/md";
import { TbFileInvoice } from "react-icons/tb";
import { FiSettings, FiHelpCircle } from "react-icons/fi";

function Sidebar({ setIsSidebarOpen }) {
  return (
    <div className="fixed lg:sticky top-0 bottom-0 z-30 w-80 h-screen px-4 border-r bg-white transition ease-in-out delay-150  ">
      <div>
        <div className="flex items-center justify-between  border-b ">
          <div className="flex items-center gap-x-2 py-8 text-blue-800 text-3xl font-semibold  hover:text-blue-600">
            <SiStarlingbank />
            <h1>Overpay.</h1>
          </div>
          <button
            className="block lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          >
            X
          </button>
        </div>
        <div className="py-8">
          <button className="flex items-center gap-4 my-2 py-2 px-6 w-full rounded-xl text-white text-left font-semibold bg-blue-500">
            <RiHome5Line className="text-xl" />
            Dashbord
          </button>
          <button className="flex items-center gap-4 my-2 py-2 px-6 w-full rounded-xl text-left text-gray-600 font-semibold cursor-pointer hover:bg-gray-100">
            <TbFileInvoice className="text-xl" />
            Invoce
          </button>
          <button className="flex items-center gap-4 my-2 py-2 px-6 w-full rounded-xl text-left text-gray-600 font-semibold cursor-pointer hover:bg-gray-100">
            <RiMessage2Line className="text-xl" />
            Mesages
          </button>
          <button className="flex items-center gap-4 my-2 py-2 px-6 w-full rounded-xl text-left text-gray-600 font-semibold cursor-pointer hover:bg-gray-100">
            <RiWalletLine className="text-xl" />
            My Wallet
          </button>
          <button className="flex items-center gap-4 my-2 py-2 px-6 w-full rounded-xl text-left text-gray-600 font-semibold cursor-pointer hover:bg-gray-100">
            <RiHistoryLine className="text-xl" />
            Activity
          </button>
          <button className="flex items-center gap-4 my-2 py-2 px-6 w-full rounded-xl text-left text-gray-600 font-semibold cursor-pointer hover:bg-gray-100">
            <MdOutlineAnalytics className="text-xl" />
            Analytics
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 w-5/6">
        <button className="flex items-center gap-4 my-2 py-2 px-6 w-full rounded-xl text-left text-gray-600 font-semibold cursor-pointer hover:bg-gray-100">
          <FiHelpCircle className="text-xl" />
          Get Help
        </button>
        <button className="flex items-center gap-4 my-2 py-2 px-6 w-full rounded-xl text-left text-gray-600 font-semibold cursor-pointer hover:bg-gray-100">
          <FiSettings className="text-xl" />
          Settings
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
