import React from 'react'
import '../styles/NavBar.css'

const NavBar = () => {
  return (
    <nav className="navbar">
      {/* Add your navigation links and logo here */}
      <a href="/">PEST</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
    </nav>
  );
}

export default NavBar