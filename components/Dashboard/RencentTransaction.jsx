import React from "react";

import { BiCalendar } from "react-icons/bi";
import { FiArrowUpRight, FiArrowDownRight } from "react-icons/fi";

function RencentTransaction({ transactionsData }) {
  return (
    <div>
      <div className="p-4 py-6 border rounded-xl hover:shadow">
        <div className="flex justify-between  mb-2">
          <h1 className="text-xl font-semibold">Reacent Transactions </h1>
          <button className="px-6 py-2 font-semibold rounded-xl hover:bg-gray-100">
            view all
          </button>
        </div>
        <table className="w-full">
          <tbody className="">
            {transactionsData.map((transaction, index) => (
              <tr key={index} className="border-b text-center">
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
                  <div className="flex items-center gap-1 py-4">
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
                <td className="py-4">
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
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RencentTransaction;
