import React from "react";
import {Link} from 'react-router-dom'
import {FaStore} from "react-icons/fa"
import './App.css'



const Navbar = () => {



return ( 
    <nav className="navbar">     
   <div className="nav-container">
      <Link exact to='/home' className="nav-logo">
        Shoppy Market
      <FaStore className="icon-shop"/>
      </Link>

        <ul className="nav-menu">
          <li className="nav-item">
        <Link to='/home' activeclassname='active' className="nav-links">
        Home
        </Link>
        </li>     

        <li className="nav-item">
        <Link to='/about' activeclassname='active' className="nav-links">
         About
         </Link>
         </li>

         <li className="nav-item">
         <Link to='contact' activeclassname='active' className="nav-links">
         Contact Us
         </Link>
         </li>
         </ul>
    </div>
    </nav>
   );
}


 
export default Navbar;