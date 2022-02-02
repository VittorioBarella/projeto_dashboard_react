import React from 'react';
import './dashboard-navbar.css';
function DashboardNavbar() {
  return (
    <nav className='navbar navbar-light bg-light justify-content-between w-100 fixed-top'>
      <form className='form-inline'>
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
      <button type='button' className='btn btn-primary'>
        Add New Section
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          fill='currentColor'
          className='bi bi-plus plusIcon'
          viewBox='0 0 16 16'
        >
          <path d='M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z' />
        </svg>
      </button>
    </nav>
  );
}

export default DashboardNavbar;
