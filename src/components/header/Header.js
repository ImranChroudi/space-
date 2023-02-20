import React , {useState} from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaMapMarkerAlt, FaUserFriends, FaTools } from 'react-icons/fa'; // import icons
import Logo from '../logo/Logo';
import './Header.css';
import {BiMenu} from 'react-icons/bi'



const activeLink= ({isActive}) => (isActive ? 'active item__link' : 'item__link');

const Header = () => {

  const [navDisplay , setNavDisplay] = useState(false)

  return (
    <header className='flex__center__between'>
      <div className="logo-header">
           <Logo />
      </div>
      <nav className={navDisplay ? 'px-lg-5 px-3 d-sm-block flex__center__center' : 'px-lg-5 px-3 d-sm-block d-none'}>
        <ul className='d-sm-flex align-items-center gap-3 gap-lg-5' >
          <li>
            <NavLink onClick={()=>{setNavDisplay(false)}} className={activeLink} to="/">
              <FaHome /> <span className='fw-bold'>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink onClick={()=>{setNavDisplay(false)}} className={activeLink} to="/destination">
              <FaMapMarkerAlt /> <span className='fw-bold'>Destination</span>
            </NavLink>
          </li>
          <li>
            <NavLink onClick={()=>{setNavDisplay(false)}} className={activeLink} to="/crew">
              <FaUserFriends /> <span className='fw-bold'>Crew</span>
            </NavLink>
          </li>
          <li>
            <NavLink onClick={()=>{setNavDisplay(false)}} className={activeLink} to="/technology">
              <FaTools /> <span className='fw-bold'>Technology</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className='icon__menu flex__center__center d-sm-none'>
         <button onClick={()=>{setNavDisplay(prev => !prev)}}>
           <BiMenu />
         </button>
      </div>
    </header>
  );
};

export default Header;
