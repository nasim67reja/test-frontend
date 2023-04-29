import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = (props) => {
  return (
    <main>
      <div className="main-container">
        <Sidebar />
        <div className="main-content">
          <Navbar />
          {props.children}
        </div>
      </div>
    </main>
  );
};

export default Layout;
