import React from "react";

import {
  TotalBalance,
  ToDayStats,
  MonthlyPayment,
  RencentTransaction,
} from "../../components/Dashboard/index";

import transactions from "../../data/transactions.json";

function Dashboard({ transactionsData }) {
  return (
    <div className="grid grid-cols-1 2xl:grid-cols-3 gap-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-1 gap-4">
        <div className="flex flex-col gap-4">
          <TotalBalance />
          <ToDayStats />
        </div>
        <MonthlyPayment />
      </div>
      <div className="col-span-2">
        <RencentTransaction transactionsData={transactionsData} />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const transactionsData = transactions;

  return {
    props: {
      transactionsData,
    },
  };
}

export default Dashboard;
