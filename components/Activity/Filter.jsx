import React from "react";

function Filter() {
  return (
    <div className="w-full flex gap-x-8">
      <div className="w-full">
        <h1 className="text-sm font-semibold">Type</h1>
        <select
          id="dropdown"
          className="mt-2 w-full py-2 px-2 text-sm font-semibold border rounded-xl"
        >
          <option value="N/A">All Transactions</option>
          <option value="1">1</option>
        </select>
      </div>
      <div className="w-full">
        <h1 className="text-sm font-semibold">Archive</h1>
        <select
          id="dropdown"
          className="mt-2 w-full py-2 px-2 text-sm font-semibold border rounded-xl"
        >
          <option value="N/A">Active</option>
          <option value="1">1</option>
        </select>
      </div>
      <div className="w-full">
        <h1 className="text-sm font-semibold">Transactions type</h1>
        <select
          id="dropdown"
          className="mt-2 w-full py-2 px-2 text-sm font-semibold border rounded-xl"
        >
          <option value="N/A">All Transactions</option>
          <option value="1">1</option>
        </select>
      </div>
      <div className="w-full">
        <h1 className="text-sm font-semibold">Date</h1>
        <select
          id="dropdown"
          className="mt-2 w-full py-2 px-2 text-sm font-semibold border rounded-xl"
        >
          <option value="N/A">Past 30 Days</option>
          <option value="1">1</option>
        </select>
      </div>
      <div className="w-full">
        <h1 className="text-sm font-semibold">Amount & Currencies</h1>
        <select
          id="dropdown"
          className="mt-2 w-full py-2 px-2 text-sm font-semibold border rounded-xl"
        >
          <option value="N/A">All Currencies</option>
          <option value="1">1</option>
        </select>
      </div>
    </div>
  );
}

export default Filter;
