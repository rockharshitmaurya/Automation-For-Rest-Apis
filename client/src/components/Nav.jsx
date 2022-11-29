import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
    
  return (
    <>
     
      <nav className="navbar fixed-top navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">GU-Naion</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNav">
      <ul className="navbar-nav  ms-auto ">
        <li className="nav-item">
         <Link className="nav-link" to='/login' >Login</Link>
        </li>
        <li className="nav-item ">
        <Link className="nav-link" to='/signup' >Sign-Up</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to='/profile' >Profile</Link>
        </li>
      </ul>
    </div>
  </div>
</nav></>
  )
}

export default Nav