import React from 'react'
import { Link } from 'react-router-dom'
import Index from './counter/Index'

function Dashbaord() {
  return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to={'/'}>MOGO</Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <Link className="nav-link" to={'/dashboard'}>Counter</Link>
                      </li> 
                      <li className="nav-item">
                        <Link className="nav-link" to={'/counter/create'}>Counter Create</Link>
                      </li> 
                    </ul> 
                  </div>
            </div>
            
        </nav>
  )
}

export default Dashbaord