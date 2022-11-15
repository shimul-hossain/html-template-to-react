import React from 'react'
import './team.css'
function Team() {
  return ( 
    <section className="ourteam">
        <div className="ourteamcontainer container">
            <div className="whatwedotxt whoweare">
                <div className="animdash">
                    <div className="anim"></div>
                </div>
                <h3>Who We Are</h3>
                <h1>MEET OUR TEAM</h1>
                <p className="ttxt">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.</p>
            </div>
            <div className="teamimg">
                <div className="teaminnerdiv">

                    <div className="tovly">
                        <ul>
                            <li><i className="fab fa-facebook-f"></i></li>
                            <li><i className="fab fa-twitter"></i></li>
                            <li><i className="fab fa-pinterest-p"></i></li>
                            <li><i className="fab fa-instagram"></i></li>
                        </ul>
                    </div>
                    <img src="images/team1.jpg" alt="" />
                    <h3>HAMZA ALTAMAS</h3>
                    <p><i>Graphics Designer</i></p>
                </div>
                <div className="teaminnerdiv">
                    <div className="tovly">
                        <ul>
                            <li><i className="fab fa-facebook-f"></i></li>
                            <li><i className="fab fa-twitter"></i></li>
                            <li><i className="fab fa-pinterest-p"></i></li>
                            <li><i className="fab fa-instagram"></i></li>
                        </ul>
                    </div>
                    <img src="images/team2.jpg" alt="" />
                    <h3>HAMZA ALTAMAS</h3>
                    <p><i>Branding/UX Design</i></p>
                </div>
                <div className="teaminnerdiv">
                    <div className="tovly">
                        <ul>
                            <li><i className="fab fa-facebook-f"></i></li>
                            <li><i className="fab fa-twitter"></i></li>
                            <li><i className="fab fa-pinterest-p"></i></li>
                            <li><i className="fab fa-instagram"></i></li>
                        </ul>
                    </div>
                    <img src="images/team3.jpg" alt="" />
                    <h3>HAMZA ALTAMAS</h3>
                    <p><i>Developer</i></p>
                </div>
                <div className="clr"></div>
            </div>
        </div>
    </section>
  )
}

export default Team