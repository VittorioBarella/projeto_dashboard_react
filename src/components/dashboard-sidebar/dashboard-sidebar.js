import React, { useEffect } from "react";
import Logo from "../../img/logo.png";
import "./dashboard-sidebar.css";
import { Link } from "react-router-dom";
import {
  FaDelicious,
  FaShoppingCart,
  FaWallet,
  FaUserEdit,
  FaRegClock,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

export function DashboardSidebar() {
  useEffect(() => {
    const mainMenuLi = document
      .getElementById("mainMenu")
      .querySelectorAll("li");

    function changeActive() {
      mainMenuLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    mainMenuLi.forEach((n) => n.addEventListener("click", changeActive));
  }, []);

  return (
    <menu>
      <img src={Logo} alt="" />
      <ul id="mainMenu">
        <Icon icon={FaDelicious} to="/home" />
        <Icon icon={FaShoppingCart} to="#" />
        <Icon icon={FaWallet} to="#" />
        <Icon icon={FaRegClock} to="#" />
        <Icon icon={FaUserEdit} to="/account-profile" />
      </ul>
      <ul className="settingsMenu">
        <Icon icon={FaCog} to="#" />
        <Icon icon={FaSignOutAlt} to="#" />
      </ul>
    </menu>
  );
}

// OS ÍCONES ESTÃO SENDO PASSADOS POR PROPS.
const Icon = ({ icon, to }) => {
  const NewIcon = icon;
  return (
    <li>
      <Link to={to}>
        <NewIcon />
      </Link>
    </li>
  );
};
