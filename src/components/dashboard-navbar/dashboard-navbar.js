import React from 'react';
import Logo from '../../img/logo.png';
import './dashboard-navbar.css';
function DashboardNavbar() {
  return (
    <nav className='navbar justify-content-between w-100 fixed-top'>
      <form className='form-inline'>
        <img src={Logo} alt='website-logo' className='webSiteLogo' />
        <input
          className='form-control mr-sm-2'
          type='search'
          placeholder='Pesquisar'
          aria-label='Pesquisar'
        />
        <button className='btn btn-outline-success my-2 my-sm-0' type='submit'>
          Pesquisar
        </button>
      </form>
    </nav>
  );
}

export default DashboardNavbar;
