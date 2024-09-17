import React, { useContext } from 'react'
import logo from './logo.png';
import { Link } from 'react-router-dom';
import { UserContext } from '../utils/UserContext';

const Navbar = () => {
  const { logedInUser, setSign } = useContext(UserContext);
  console.log(useContext(UserContext));
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt='logo' />
      </div>
      <div className="navbar__menu">
        <ul>
          <li><Link to={"/"} className='nav_link'>Home</Link></li>
          <li><Link to={"/about"} className='nav_link'>About</Link></li>
          <li><Link to={"/contact"} className='nav_link'>Contact</Link></li>
          <li onClick={() => setSign("Rahul Bhati")}>{logedInUser}</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
