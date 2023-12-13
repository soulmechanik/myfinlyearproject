import React from 'react'
import './Header.scss'


const Header = () => {
  return (
    <div className='Header-wrapper'>
    <div className="Header-container">
        <div className="Header">
            <nav>
            <div className="logo"><span className='logo'>MyFyP</span> </div>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">About Us</a></li>
                <li><a href="" className='h-signin'>Sign in</a></li>
                <li><a href="" className='botton'>See Pricing</a></li>
                <li><a href="">Contact Us</a></li>
            </ul>
            </nav>
        </div>
    </div>
    </div>
  )
}

export default Header
