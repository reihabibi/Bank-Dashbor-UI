import React, { useState } from "react";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Layout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  return (
    <div className="max-h-screen">
      <div className="flex">
      {isSidebarOpen ?  <Sidebar setIsSidebarOpen={setIsSidebarOpen}  /> : ""}
        <div className="px-8 w-full ">
          <Navbar setIsSidebarOpen={setIsSidebarOpen} isSidebarOpen={isSidebarOpen}/>
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
}

export default Layout;
