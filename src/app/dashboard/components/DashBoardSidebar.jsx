import React from "react";
import Badge from "../../../Assets/icons/Badge.svg";
import { signout } from "../../../auth";
import { useHistory } from "react-router-dom";
import "./css/dashboardSidebar.css";

function DashBoardSidebar({ pp, name, branch, batch, role }) {
  const history = useHistory();

  const onClickLogout = () => {
    signout(() => {
      history.push("/");
      window.location.reload();
    });
  };

  
  return (
    <div className="dashboard-Sidebar">
      <div className="profile-section">
        <img src={pp} alt="" className="profile-pic" />
        <p className="name">{name}</p>
        <p className="branch">{branch}</p>
        <p className="batch">{batch}</p>
      </div>
      <div className="role-section">
        <img src={Badge} alt="" className="badge" />
        <p className="role">{role}</p>
      </div>
      <div className="logout">
        <button className="log-out" onClick={onClickLogout}>
          <i className="fas fa-sign-out-alt"></i> Log Out
        </button>
      </div>
    </div>
  );
}

export default DashBoardSidebar;