import React from "react";
import './App.css';

function TopNavBar() {
    return (
        <div className="app-header">
            <div className="header-image">
                <a href="/">
                    <img src="images/logo.png" alt="logo" />
                </a>
            </div>
            <div className="header-text">
                <span className="black-text">Golbey, Lorraine, France</span>
                <span className="black-text">Lundi - Samedi de 10h à 18h</span>
                <a href="tel: 0771072309" className="red-bg"> &#128222; 0771072309</a>
            </div>
        </div>
    )
}

export default TopNavBar;