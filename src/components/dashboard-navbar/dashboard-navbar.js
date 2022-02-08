import React from 'react';
import Logo from '../../img/logo.png';
import UserProfileImage from '../../img/user_image.jpg';
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
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <img src={UserProfileImage} width="30" height="30" className="d-inline-block align-top userProfileImage" alt="" />
          <span className='text-light'>Vittório Andrade</span>
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
    </nav>
  );
}

export default DashboardNavbar;
