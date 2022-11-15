import React from 'react'
import './footer.css'
function Footer() {
  return (
    <>
    <section className="footer">
        <div className="footercontainer container">
            <div className="footer1">
                <h1>MoGo</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. </p>
                <p className="follow"><b>15k</b>&nbsp; followers</p>
                <div className="footerhr"></div>
                <p className="followus"><i>Follow Us:</i></p>
                <ul>
                    <li><i className="fab fa-facebook-f"></i></li>
                    <li><i className="fab fa-twitter"></i></li>
                    <li><i className="fab fa-instagram"></i></li>
                    <li><i className="fab fa-pinterest-p"></i></li>
                    <li><i className="fab fa-google-plus-g"></i></li>
                    <li><i className="fab fa-youtube"></i></li>
                    <li><i className="fas fa-basketball-ball"></i></li>
                    <li><i className="fab fa-tumblr"></i></li>
                </ul>
                <input className="emailbox" type="email" placeholder="Your Email..." /><a href="">SUBSCRIBE</a>
            </div>
            <div className="footer2">
                <div className="footer2img">
                    <h3>BLOGS</h3>
                    <img src="images/footer21.jpg" alt=""/><img src="images/footer22.jpg" alt=""/><img src="images/footer23.jpg" alt=""/> 
                </div>
                <div className="footer2txt">
                    <h4 className="h4">
                        Lorem ipsum dolor sit amet,
                        consectetur adipiscing
                    </h4>
                    <p>
                        <i>Jan 9, 2016</i>
                    </p>
                    <h4 className="h42">
                        Lorem ipsum dolor sit amet,
                        consectetur adipiscing
                    </h4>
                    <p>
                        <i>Jan 9, 2016</i>
                    </p>
                    <h4 className="h43">
                        Lorem ipsum dolor sit amet,
                        consectetur adipiscing
                    </h4>
                    <p>
                        <i>Jan 9, 2016</i>
                    </p>
                </div>
            </div>
            <div className="footer3">
                <h3>
                    INSTAGRAM
                </h3>
                <div className="instagrid">
                    <div className="instaimg">
                        <div className="fovly"><i className="fab fa-instagram-square"></i></div><img src="images/footer31.jpg"
                            alt="" />
                    </div>
                    <div className="instaimg">
                        <div className="fovly"><i className="fab fa-instagram-square"></i></div><img src="images/footer32.jpg"
                            alt="" />
                    </div>
                    <div className="instaimg">
                        <div className="fovly"><i className="fab fa-instagram-square"></i></div><img src="images/footer33.jpg"
                            alt="" />
                    </div>
                    <div className="instaimg">
                        <div className="fovly"><i className="fab fa-instagram-square"></i></div><img src="images/footer34.jpg"
                            alt="" />
                    </div>
                    <div className="instaimg">
                        <div className="fovly"><i className="fab fa-instagram-square"></i></div><img src="images/footer35.jpg"
                            alt="" />
                    </div>
                    <div className="instaimg">
                        <div className="fovly"><i className="fab fa-instagram-square"></i></div><img src="images/footer36.jpg"
                            alt="" />
                    </div>
                    <div className="instaimg">
                        <div className="fovly"><i className="fab fa-instagram-square"></i></div><img src="images/footer37.jpg"
                            alt="" />
                    </div>
                    <div className="instaimg">
                        <div className="fovly"><i className="fab fa-instagram-square"></i></div><img src="images/footer38.jpg"
                            alt="" />
                    </div>
                    <div className="instaimg">
                        <div className="fovly"><i className="fab fa-instagram-square"></i></div><img src="images/footer39.jpg"
                            alt="" />
                    </div>
                </div>
                <a href="">
                    <p><i>View More Photos</i></p>
                </a>
            </div>
        </div>

    </section>
    <section className="copyrighgt">
        <div className="copyrightcontainer container">
            <p>2021<i className="far fa-copyright"></i>PSD To HTML By <a href="">HAMZA ALTAMAS</a></p>
        </div>
    </section> 
    <section className="emptyspaceforscrool"></section>
    </>
  )
}

export default Footer