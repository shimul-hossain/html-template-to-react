import React from 'react'
import './navbar.css'
function Navbar() {
  return (
    <section className="topbarbanner" style={{ background:"url(images/bannereagle.jpg)" }}>
        <div className="topbarbannercontainer container">
            <div className="topbar container">
                <div className="logo">
                    <h1>
                        MoGo
                    </h1>
                </div>
                <div className="menuitems">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Service</a></li>
                        <li><a href="#">Work</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </div>
            <div className="bannertxt">
                <h2>
                    Creative Template
                </h2>
                <h1>
                    WELCOME TO MOGO
                </h1>
            </div>
            <div className="bannerbtn">
                <div className="bnrbtnhover"></div>
                <a className="btn" href="#">LEARN MORE</a>
            </div>
            <div className="clr"></div>

        </div>
    </section>
  )
}

export default Navbar