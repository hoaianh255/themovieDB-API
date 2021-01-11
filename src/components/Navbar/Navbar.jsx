import React, {useState} from 'react';
import './navbar.css';
import {Link} from 'react-router-dom';
import logo from './Coder-PNG-File.png';
function Navbar(props) {
  const [toggle,setToggle] = useState(false);
  return (
    <div className=" navbar">
      <div className="flex">
        <div className="logo p-1">
          <Link to="/">
            <img src={logo} alt="Logo" className="align-middle max-h-14 md:max-h-16"/>
          </Link>
        </div>
        <div className="mobile-input-search p-1 md:hidden flex justify-between w-full">
          <div className="search-button p-2">
            <form action="/search" method="get">
              <input type="text" placeholder="Search for name film" name="s" className="py-1 px-1.5 bg-gray-600 text-white rounded-l align-middle outline-none"/>
              <button type="submit" className="bg-gray-700 py-1 px-1.5 rounded-r text-white align-middle" >
                <i className="fas fa-search"></i>
              </button>
            </form>
          </div>
          <div className="toggle-button p-2">
            <button onClick={()=> setToggle(!toggle)} className="align-middle text-2xl text-white   focus:outline-none"><i className="fas fa-align-justify"></i></button>
          </div>
        </div>
        <ul className="justify-center hidden  md:flex">
        <li className="hidden md:block">
          <form action="/search" method="get">
            <input type="text" placeholder="Search for name film" name="s" className="py-1.5 px-3 align-middle bg-gray-600 text-white rounded-l outline-none"/>
            <button type="submit" className="bg-gray-700 py-1.5 px-2 rounded-r text-white align-middle">
              <i className="fas fa-search"></i>
            </button>
          </form>
        </li>
        <li><Link to="/contentPolicy">Content Policy</Link></li>
        <li><Link to="/privatePolicy">Private Policy</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><a href="#">Learning <i className="fas fa-graduation-cap"></i></a></li>
      </ul>
      </div>
       <ul className={`justify-center flex-col flex md:hidden overflow-hidden mobile-menu`} style={{height: !toggle ? '0px' : '100vh'}}>
         <li><a href="/contentPolicy">Content Policy</a></li>
         <li><a href="/privatePolicy">Private Policy</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="#">Learning <i className="fas fa-graduation-cap"></i></a></li>
        </ul>
    </div>
  );
}

export default Navbar;