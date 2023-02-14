import React from 'react'
import {Link} from 'react-router-dom'
import  logo from "../image/logo.svg" // Kullanacağımız logoyu import ettik.

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        {/*logo ya tıklanınca anasayfaya yönlendirdik.*/}
        <Link to="/">
          <img className="logo" src={logo} alt="coctail db logo" />
        </Link>
        <ul className="nav-links">
          {/*Navbar da gösterdiğim sayfalara gitmek  için yönlendirme yaptık.*/}
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="/about"> About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar