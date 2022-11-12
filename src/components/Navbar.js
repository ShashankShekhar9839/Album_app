import React from 'react'
import {Link} from 'react-router-dom'
import '../css_files/navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
    <h3>
    <Link to ='/'>Home</Link> |{" "}
    <Link to='/album'>Album</Link>
    </h3>
        
    </div>
  )
}

export default Navbar;