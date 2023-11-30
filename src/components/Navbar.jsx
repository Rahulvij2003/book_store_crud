import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        

        <header className="header">
        <p className="logo">Books</p>
        <nav className="nav-items">
            <Link to="/">Home</Link>
            <Link to="/books">Books</Link>
            <Link to="/addbooks">Add Books</Link>
        </nav>
        </header>

        


      
    </div>
  )
}

export default Navbar
