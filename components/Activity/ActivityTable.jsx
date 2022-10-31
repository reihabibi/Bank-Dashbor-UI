import React from "react";

import { BiCalendar } from "react-icons/bi";
import { FiArrowUpRight, FiArrowDownRight } from "react-icons/fi";
import { RiArrowUpDownLine } from "react-icons/ri";

function ActivityTable({ transactionsData }) {
  return (
    <div>
      <div className="">
        <table className="w-full ">
          <thead className="py font-semibold border-y">
            <tr>
              <td className="py-4">Name/Buisnes</td>
              <td>Date</td>
              <td className="text-right pr-3">Invoce ID</td>
              <td className="text-right pr-7">Amount</td>
              <td className="text-right pr-48">Status</td>
            </tr>
          </thead>
          <tbody className="">
            {transactionsData.map((transaction, index) => (
              <tr key={index} className="border-b text-right">
                <td>
                  <div className="flex items-center gap-4 py-4 ">
                    <img
                      className="w-12 h-12 rounded-full shadow-xl object-cover"
                      src={transaction.logo}
                      alt=""
                    />
                    <h1 className="font-semibold">{transaction.name}</h1>
                  </div>
                </td>
                <td>
                  <div className=" flex items-center gap-2 text-gray-700 py-4">
                    <BiCalendar className="text-xl" />
                    <h1 className="font-semibold">{transaction.date}</h1>
                  </div>
                </td>
                <td>
                  <h1>PMX09812</h1>
                </td>
                <td className="">
                  <div className="flex items-center justify-end gap-1 py-4">
                    {transaction.type === "recived" && "+"}
                    {transaction.type === "sended" && "-"}
                    <h1 className="text-lg font-bold">{transaction.amount}</h1>
                    {transaction.type === "recived" && (
                      <FiArrowUpRight className="text-lg text-green-700" />
                    )}
                    {transaction.type === "sended" && (
                      <FiArrowDownRight className="text-lg text-red-700" />
                    )}
                  </div>
                </td>
                <td className="">
                  {transaction.status === "success" && (
                    <button className="w-28 py-2 text-gren-700 bg-green-200 font-semibold rounded-xl ">
                      Success
                    </button>
                  )}
                  {transaction.status === "failed" && (
                    <button className="w-28 py-2 text-red-700 bg-red-200 font-semibold rounded-xl ">
                      Failed
                    </button>
                  )}
                  {transaction.status === "pending" && (
                    <button className="w-28 py-2 text-yellow-700 bg-yellow-200 font-semibold rounded-xl ">
                      Pending
                    </button>
                  )}
                  <button className="ml-4 w-28 py-2 font-semibold border rounded-xl hover:bg-gray-100">
                    Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ActivityTable;
