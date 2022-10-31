import React from "react";

import { VscListFilter } from "react-icons/vsc";
import { CiExport } from "react-icons/ci";

function Head({ filterOpen, setFilterOpen }) {
  return (
    <div className="">
      <div className="flex items-center justify-between">
        <input
          className="w-1/3 px-6 py-2 text-sm border rounded-xl border-gray-400 "
          placeholder="Search for transaction.."
        ></input>
        <div className="flex gap-8">
          <button
            onClick={() => setFilterOpen(!filterOpen)}
            className={
              "flex items-center gap-2 px-6 py-1 border  rounded-xl hover:bg-blue-200 hover:border-blue-200 " +
              (filterOpen
                ? " bg-blue-200 border-blue-200"
                : " border-gray-400  ")
            }
          >
            <VscListFilter />
            Filters
          </button>
          <button className="flex items-center gap-2 px-6 py-1 border border-gray-400 rounded-xl hover:bg-blue-200 hover:border-blue-200">
            <CiExport />
            Export
          </button>
        </div>
      </div>
    </div>
  );
}

export default Head;
