import React, { useState, } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import {Button} from '../Button/Button'

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
            <h1>Jobber</h1>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/empregos' className='nav-links' onClick={closeMobileMenu}>
                Empregos
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/freelancer'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Freelancer
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/perfil'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Perfil
              </Link>
            </li>
            
              <Link
                to='/login'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                <Button className="btn"
                buttonSize='btn-large'
                buttonStyle='btn-primary'>Login</Button>
              </Link>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;