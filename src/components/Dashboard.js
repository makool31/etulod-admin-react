import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AIIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import { Redirect } from "react-router-dom";

function Dashboard({ Dashboard, error }, { authorized }) {
  const [sidebar, setSidar] = useState(false);

  const showSidbar = () => setSidar(!sidebar);

  if (!authorized) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <div className="dashboard">
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars onClick={showSidbar} />
        </Link>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items">
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <AIIcons.AiOutlineClose />
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.Name}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Dashboard;
