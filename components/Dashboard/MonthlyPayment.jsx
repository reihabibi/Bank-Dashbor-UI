import React from "react";

function MonthlyPayment() {
  return (
    <div className="h-fit p-4 py-6 border rounded-xl hover:shadow">
      <h1 className="text-xl font-semibold">Monthly Payment</h1>
      <div className="mt-6 flex flex-col gap-y-6">
        <div className="flex items-center justify-between">
          <div className="flex gap-4 items-center">
            <img
              className="w-12 h-12 p-2 rounded-full shadow-xl object-cover"
              src="https://imgs.search.brave.com/mDJav7znT7S0zD9jp_gVy0ODq4u-9dGh4oF5JJxjI3Y/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/cG5nYXJ0cy5jb20v/ZmlsZXMvMS9OZXRm/bGl4LUxvZ28tUE5H/LVRyYW5zcGFyZW50/LUltYWdlLnBuZw"
              alt=""
            />
            <div>
              <h1 className="font-semibold">Netflix</h1>
              <h1 className="text-sm font-semibold text-gray-500">
                Pay Before 12 July
              </h1>
            </div>
          </div>
          <div className="flex gap-6 items-center">
            <h1 className="text-xl font-semibold">$20,20</h1>
            <button className="w-28 py-2 text-white font-bold rounded-xl bg-blue-400 hover:bg-blue-500">
              Pay Now
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-4 items-center">
            <img
              className="w-12 h-12 p-2 rounded-full shadow-xl object-cover"
              src="https://imgs.search.brave.com/enJrkYgDh-ba44wK6w14wuPifDldaCAROU4uYKGQ-mo/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9jZG4u/ZnJlZWJpZXN1cHBs/eS5jb20vbG9nb3Mv/bGFyZ2UvMngvc3Bv/dGlmeS0yLWxvZ28t/cG5nLXRyYW5zcGFy/ZW50LnBuZw"
              alt=""
            />
            <div>
              <h1 className="font-semibold">Spotify</h1>
              <h1 className="text-sm font-semibold text-gray-500">
                Pay Before 17 July
              </h1>
            </div>
          </div>
          <div className="flex gap-6 items-center">
            <h1 className="text-xl font-semibold">$20,10</h1>
            <button className="w-28 py-2 text-white font-bold rounded-xl bg-blue-400 hover:bg-blue-500">
              Pay Now
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-4 items-center">
            <img
              className="w-12 h-12 p-2 rounded-full shadow-xl "
              src="http://cdn.onlinewebfonts.com/svg/img_553938.png"
              alt=""
            />
            <div>
              <h1 className="font-semibold">Car Loan</h1>
              <h1 className="text-sm font-semibold text-gray-500">
              </h1>
            </div>
          </div>
          <div className="flex gap-6 items-center">
            <h1 className="text-xl font-semibold">$372.86</h1>
            <button className="w-28 py-2 text-white font-bold rounded-xl bg-green-400">
              Payed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MonthlyPayment;
