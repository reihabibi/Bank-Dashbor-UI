import React from "react";
import { BsArrowUpRightCircle } from "react-icons/bs";

function TotalBalance() {
  return (
    <div className="p-4 border rounded-xl hover:shadow-lg">
      <div className="flex items-end gap-1">
        <h1 className="text-3xl font-bold">$81,920</h1>
        <h1 className="text-gray-600 font-semibold">USD</h1>
      </div>
      <h1 className="mt-2 text-sm text-gray-700 font-semibold">
        Total Balance
      </h1>
      <div className="mt-6 flex justify-around gap-x-10">
        <button className="flex items-center justify-center w-2/4 py-1 gap-x-2 border rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-bold">
          Send
        </button>
        <button className="flex items-center justify-center w-2/4 py-1 gap-x-2 border rounded-xl bg-red-500 hover:bg-red-600 text-white font-bold">
          Recive
        </button>{" "}
      </div>
    </div>
  );
}

export default TotalBalance;
