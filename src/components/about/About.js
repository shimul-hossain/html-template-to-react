import React from 'react'
import './about.css'
function About() {
  return (
    <section className="whatwedo">
        <div className="whatwedocontainer container">
            <div className="whatwedotxt">
                <div className="animdash">
                    <div className="anim"></div>
                </div>
                <h3>What we do</h3>
                <h1>STORY ABOUT US</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.</p>
            </div>
            <div className="whatwedoimg">
                <div className="whatimg whatimgstart">
                    <div className="whatovly">
                        <i className="fas fa-users"></i>
                        <h3>SUPER TEAM</h3>
                    </div>
                    <img src="images/whatdoimg1.jpg" alt="" />
                </div>
                <div className="whatimg">
                    <div className="whatovly">
                        <i className="fas fa-users"></i>
                        <h3>SUPER TEAM</h3>
                    </div>
                    <img src="images/whatdoimg2.jpg" alt="" />
                </div>
                <div className="whatimg whatimgend">
                    <div className="whatovly">
                        <i className="fas fa-users"></i>
                        <h3>SUPER TEAM</h3>
                    </div>
                    <img src="images/whatdoimg3.jpg" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default About