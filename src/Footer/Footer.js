import React from "react";
import "./Footer.css";
import {FaInstagramSquare} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {FaSkype} from 'react-icons/fa';
import {FaGoogle} from 'react-icons/fa';
import "../main.css";
import { Link } from "react-router-dom";




const Footer = () =>{
    return(
        <footer className="footer-wrapper">

            <div className="footer-wrapper__container">
        
                <nav className="footer-wrapper__navigation">
                    <ul className="footer-wrapper-iteams">
                        <li className="footer-wrapper__item"><a href="#">Merchants</a></li>
                        <li className="footer-wrapper__item"><Link to="/about">About Us</Link></li>
                        <li className="footer-wrapper__item"><Link to="/cookie">Cookie Policy</Link></li>
                        <li className="footer-wrapper__item"><a href="#">Help</a></li>
                        <li className="footer-wrapper__item"><Link to='/privacy'>Privacy &#38; Policy</Link></li>
                        <li className="footer-wrapper__item"><Link to="/terms">Terms &#38; Conditions</Link></li>
                    </ul>
                </nav>

        
                <div className="social-media__container">
                    <div className="social-content">
                       <FaInstagramSquare className="icon" size="30px"/>
                    </div>

                    <div className="social-content">
                       <FaTwitter className="icon" size="30px"/>
                    </div>

                    <div className="social-content">
                       <FaSkype className="icon" size="30px" />
                    </div>

                    <div className="social-content">
                       <FaGoogle className="icon" size="30px"/>
                    </div>
                </div>
            

                <div className="footer__policy">
                    <p>By using our site you area agree to our Terms of Use.Read our <a href="">Privacy &#38; Policy.</a>
                     &copy;2020 <a href="#">eve-yemek.com</a>.LLC.All right reserved.</p>
                </div>
            </div>
        </footer>
    );
}


export default Footer; 

