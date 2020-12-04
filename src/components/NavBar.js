import React from 'react'
import LOGO from '../img/logo.png'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div class="navbar-fixed nav">
        <nav>
          <div class="nav-wrapper blue darken-4">
            <div className="container" style={{pdding: '5px'}}>
                <Link to="/" className="brand-logo">
                    <img src={LOGO} alt="logo" className="logo"/>
                </Link>
            </div>
          </div>
        </nav>
    </div>
  )
}
