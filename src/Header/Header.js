import React from "react";
import ReactDOM from "react-dom";
import "./Header.css";
import "../main.css";

const Header = () =>{
    return(
        <header className="main-header">
            <div className="logo-container">
                <img src={require('../img/logo.png')} alt="eve-yemek"/>
            </div>
            <nav className="navigation-container">
                <ul className="ul-container">
                    <li className="list__item"><a href="#">Sign In</a></li>
                    <li className="list__item"><a href="#">Sign Out</a></li>
                </ul>
            </nav>
        </header>
    );
}


export default Header; 