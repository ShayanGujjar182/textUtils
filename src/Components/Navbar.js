import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

// "navbar navbar-expand-lg bg-body-tertiary" {`data-bs-theme= ${props.mode}`}
export default function Navbar(props) {
  return (
    <div>
      <nav className= {`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.aboutText}</Link>
            </li>
          </ul>
          <div className="btn btn-primary mx-1" onClick={(()=>{props.toggleMode('primary')})} style={{height: '30px', width :"30px"}}></div>
          <div className="btn btn-danger mx-1" onClick={(()=>{props.toggleMode('danger')})} style={{height: '30px', width :"30px"}}></div>
          <div className="btn btn-success mx-1" onClick={(()=>{props.toggleMode('success')})} style={{height: '30px', width :"30px"}}></div>
          <div className="btn btn-warning mx-1" onClick={(()=>{props.toggleMode('warning')})} style={{height: '30px', width :"30px"}}></div>
          <div className="btn btn-dark mx-1" onClick={(()=>{props.toggleMode('dark')})} style={{height: '30px', width :"30px"}}></div>
          <div className="form-check form-switch">
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" style={{color:props.mode==='dark'? 'white' : 'black'}} htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
          </div>
          
          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form> */}
        </div>
      </div>
    </nav>
    </div>
  )
}

Navbar.propTypes = {
    title : PropTypes.string.isRequired ,
    aboutText : PropTypes.string.isRequired,

}
Navbar.defaultProps = {
    title : "Set Title Here",
    aboutText : 'About'
}
