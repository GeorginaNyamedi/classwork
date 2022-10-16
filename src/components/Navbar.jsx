import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="shadow-md py-5">
     <nav className="flex justify-between max-w-7xl mx-auto">
      <h3>PreMest</h3>
      <ul className="gap-5 hidden md:flex">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/products">Products</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/task-manager">TaskManager</NavLink></li>
       </ul>
       <div className="md:hidden">H</div>
     </nav>
    </div>
  );
};

export default Navbar;