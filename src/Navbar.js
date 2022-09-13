import React from "react";
import {Link} from 'react-router-dom'
import './App.css'


const Navbar = () => {


  return ( 
    <nav className="navbar">     
   <div className="nav-container">
      <Link exact to='/home' className="nav-logo">
        Doggo Adoption
      </Link>

        <ul className="nav-menu">
          <li className="nav-item">
        <Link to='/home' activeClassName='active' className="nav-links">
        Home
        </Link>
        </li>     

        <li className="nav-item">
        <Link to='/about' activeClassName='active' className="nav-links">
         About
         </Link>
         </li>

         <li className="nav-item">
         <Link to='/pricing' activeClassName='active' className="nav-links">
         Pricing
         </Link> 
         </li> 

         <li className="nav-item">
         <Link to='contact' activeClassName='active' className="nav-links">
         Contact Us
         </Link>
         </li>
         </ul>
    </div>
    </nav>
   );
}


 
export default Navbar;