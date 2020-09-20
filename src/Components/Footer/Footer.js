import React from 'react';
import Button from '../Button/Button';
import { FooterItems, SingleFooter,SocialMediaLinks} from "./FooterItems";
import {Link} from "react-router-dom";
import "./Footer.css"
function Footer(){

    return(
            <div className="footer-container">
                <section className="footer-subscription">
                    <p className="footer-subscription-heading">
                        Join the Adventure newsletter to receive our best vacation deals
                    </p>
                    <p className="footer-subscription-text">
                        You can unsubscribe at any time.
                    </p>
                    <div className="input-area">
                        <form>
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                className = "footer-input"
                                />
                            <Button buttonStyle="btn--outline">Subscribe</Button>
                        </form>
                    </div>
                </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                    {
                    /* 
                        <div className="footer-link-items">
                            <h2>About Us</h2>
                            <Link to="/sign-up">How it works</Link>
                            <Link to="//">Testimonials</Link>
                            <Link to="/">Careers</Link>
                            <Link to="/">Investors</Link>
                            <Link to="/">Teams of Services</Link>
                        </div> 
                    */
                    }
                    <FooterItems
                        link1= "How it works"
                        tolink1 = "/sign-up"
                        link2="Testimonials"
                        link3="Careers"
                        link4="Investors"  
                        headerText= "About us"    
                    />
                    <SingleFooter
                        toSingleLink = "/"
                        linkSingleText= "Teams of Services"
                    />
                    </div>
                    <div className="footer-link-items">
                        <FooterItems
                            link1="Contact"
                            tolink1="/sign-up"
                            link2="Support"
                            link3="Destinations"
                            link4="Sponsorships"
                            headerText="Contact us"
                        />
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-wrapper">
                        <div className="footer-link-items">
                        <FooterItems
                            link1="Submit Videos"
                            tolink1="/"
                            link2="Ambassadors"
                            link3="Agency"
                            link4="Influencer"
                            headerText="Videos"
                        />
                        </div>
                        <div className="footer-link-items">
                        <FooterItems
                            link1="Instagram"
                            tolink1="/"
                            link2="Facebook"
                            link3="Youtube"
                            link4="Twitter"
                            headerText="Social Media"
                        />
                        </div>
                    </div>
                </div>
            </div>
        {
            /**
            Social media contact
            */
        }
        <section className="social-media">
            <div className="social-media-wrap">
                <div className="footer-logo">
                    <Link 
    //classes, target, to, label,logo
                            className= "social-logo"
                    to = "/"
                    >
                    TRVL <i className= 'fab fa-typo3'></i>
                    </Link>
                </div>
                <small className="website-rights">TRVL © 2020</small>
                <div className="social-icons">
                    <Link 
                    className = "social-icon-link facebook"
                    to = "/"
                    target="_blank"
                    aria-label = "Facebook"
                    >
                    <i className="fab fa-facebook"></i>
                    </Link>

                    <Link
                    className="social-icon-link instagram"
                    to="/"
                    target="_blank"
                    aria-label="Instagram"
                    >
                    <i className="fab fa-instagram"></i>
                    </Link>

                    <Link
                    className="social-icon-link youtube"
                    to="/"
                    target="_blank"
                    aria-label="Youtube"
                    >
                    <i className="fab fa-youtube"></i>
                    </Link>
            
                    <Link
                    className="social-icon-link twitter"
                    to="/"
                    target="_blank"
                    aria-label="Twitter"
                    >
                    <i className="fab fa-twitter"></i>
                    </Link>

                    <Link
                    className="social-icon-link linkedin"
                    to="/"
                    target="_blank"
                    aria-label="LinkedIn"
                    >
                    <i className="fab fa-linkedin"></i>
                    </Link>

                </div>



            </div>

        </section>





            </div>

    )

}

export default Footer;