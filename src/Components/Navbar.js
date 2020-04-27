import React from 'react'
import {Link} from 'react-router-dom'

import GoogleAuth from './GoogleAuth'

const Navbar = () => {
    return (
        <div className="ui attached stackable menu">
        <div className="ui container">
          <Link to='/' className="item">
            <i className="home icon" /> Home
          </Link>
          <Link to='/cart' className="item">
            <i className="home icon" /> Cart
          </Link>
         
          <div className="middle item">
            <div className="ui input"><input type="text" placeholder="Search..." /></div>
          </div>
          <div className="right item">
          
            <GoogleAuth/>
          </div>
        </div>
      </div>
    )
}

export default Navbar
