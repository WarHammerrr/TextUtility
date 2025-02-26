import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link a" aria-current="page" to="/about">{props.about}</Link>
        </li>
             
      </ul>        
    </div>
  
<div className="form-check form-switch text" style={{color:props.mode==='light'?'black':'white'}}>
                        <input className="form-check-input" onClick={props.onToggle} type="checkbox" id="flexSwitchCheckDefault"/>
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode==='light'?'Dark':'Light'} Mode </label>
                    </div>

  </div>
</nav>
    </div>
  )
}

Navbar.propTypes= {
    title:PropTypes.string.isRequired,
    about:PropTypes.string.isRequired
} 
// Navbar.defaultProps={
//     title:'Enter title',
//     about:'Enter about'
// }

