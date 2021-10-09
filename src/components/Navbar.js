import React from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../img/logo_vtb.png'

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="divNav">
        <span><img src={logo} alt="" className="logo"/></span>
        <div className="pages">
          <NavLink to="/user/data_catalog" >Каталог данных</NavLink>
          <NavLink to="/user/partners">Партнеры</NavLink>
        </div>
        <div className="auth">
          <a className="singIn" to="/data_catalog" >Sing In</a>
          <a className="singUp" to="/partners">Sing Up</a>
        {/*  TODO авторизацию сделать*/}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
