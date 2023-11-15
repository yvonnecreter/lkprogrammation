import React from "react";
import './App.css';

function TopNavBar() {
    return (
        <div>
            <div className="app-header hidden md:flex">
                <div className="header-image">
                    <a href="/">
                        <img src="images/logo.png" alt="logo" />
                    </a>
                </div>
                <div className="header-text text-xs lg:text-lg">
                    <span className="black-text">Golbey, Lorraine, France</span>
                    <span className="black-text">Lundi - Samedi de 10h à 18h</span>
                    <a href="tel: 0771072309" className="red-bg"> &#128222; 0771072309</a>
                </div>
            </div>
            <div className="mobile-header flex md:hidden">
                <div className="mobile-header-image">
                    <a href="/">
                        <img src="images/logo-footer.png" alt="logo" />
                    </a>
                </div>
                <div className="text-xs flex-row">
                    <a href="https://maps.app.goo.gl/nw9j3ThHh2UnC5sM8" className="black-text"> Golbey, FR</a>
                    <a href="tel: 0771072309" className="red-bg"> &#128222; 0771072309</a>
                </div>
            </div>
        </div>
    )
}

export default TopNavBar;