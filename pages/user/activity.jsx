import React, { useState } from "react";

import { Head, ActivityTable, Filter } from "../../components/Activity/index";
import transactions from "../../data/transactions.json";

function Activity({ transactionsData }) {
  const [useFilterOpen, setUseFilterOpen] = useState(false);
  return (
    <div className="px-6 py-8 w-full flex flex-col gap-8">
      <Head filterOpen={useFilterOpen} setFilterOpen={setUseFilterOpen} />
      {useFilterOpen ? <Filter /> : ""}
      <ActivityTable transactionsData={transactionsData} />
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

export default Activity;
