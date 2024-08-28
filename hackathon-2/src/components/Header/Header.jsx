import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <h1 className="header__title">Your Personal Journal</h1>

      <div className="header__nav">
      <Link to="/" id="homelink"><h2 className="header__nav-home">Home</h2></Link>
        <h2 className="header__nav-entries">Past Entries</h2>
      </div>
    </div>
  )
}

export default Header