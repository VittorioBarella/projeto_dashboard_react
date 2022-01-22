import React, { useEffect } from 'react';
import Logo from '../../img/logo.png';
import '../dashboard-sidebar/dashboard-sidebar.css';
import {
  FaDelicious,
  FaShoppingCart,
  FaWallet,
  FaChartLine,
  FaRegClock,
  FaCog,
  FaSignOutAlt,
} from 'react-icons/fa';

function DashboardSidebar() {
  useEffect(() => {
    const mainMenuLi = document.getElementById('mainMenu').querySelector('li');

    function changeActive() {
      mainMenuLi.forEach((n) => n.classList.remove('active'));
      this.classList.add('active');
    }

    mainMenuLi.forEach((n) => n.addEventListener('click', changeActive));
  }, []);
  return (
    <menu>
      <img src={Logo} alt='' />
      <ul id='mainMenu'>
        <Icon icon={<FaDelicious />} />
        <Icon icon={<FaShoppingCart />} />
        <Icon icon={<FaWallet />} />
        <Icon icon={<FaChartLine />} />
        <Icon icon={<FaRegClock />} />
      </ul>
      <ul className='settingsMenu'>
        <Icon icon={<FaCog />} />
        <Icon icon={<FaSignOutAlt />} />
      </ul>
    </menu>
  );
}

// OS ÍCONES ESTÃO SENDO PASSADOS POR PROPS.
const Icon = ({ icon }) => {
  <li>
    <a href='#'>{icon}</a>
  </li>;
};
