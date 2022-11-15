import React from 'react'
import './speech.css'
function Speech() {
  return (
    <section className="speech">
        <div className="speechcontainer container">
            <p className="right speechitems"><i className="fas fa-chevron-right"></i></p>
            <p className="left speechitems"><i className="fas fa-chevron-left"></i></p>
            <div className="txtdiv speechitems">
                <h5 className="speechtxt speechitems">
                    <i> “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.”</i>
                </h5>
            </div>
            <div className="messageicon speechitems">
                <p className="micon speechitems"><i className="fas fa-comments"></i></p>
            </div>
            <div className="dash speechitems"></div>
            <div className="myname speechitems">
                <h1>Hamza Altamas</h1>
            </div>
        </div>
    </section>
  )
}

export default Speech