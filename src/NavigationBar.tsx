import React from "react";
import './App.css';
import './NavigationBar.css';

function NavigationBar() {
    return (
        <div className="navigationBar">
            <div className="spacer" />
            <hr className="solidLine" />
            <div className="navigationElements">
                <a href="/contact" className="navigationElement"> Optimisation<span className="material-symbols-outlined socialIcons"> keyboard_arrow_down</span></a>
                <a href="/contact" className="navigationElement"> Optimisation<span className="material-symbols-outlined socialIcons"> keyboard_arrow_down</span></a>
                <div className="logoContainer"><a href="/">
                    <img src="images/logo.png" alt="logo" /> </a>
                </div>
                <a href="/contact" className="navigationElement"> Optimisation<span className="material-symbols-outlined socialIcons"> keyboard_arrow_down</span></a>
                <a href="/contact" className="navigationElement"> Optimisation<span className="material-symbols-outlined socialIcons"> keyboard_arrow_down</span></a>
                {/* <div className="header-image">
                    <a href="/">
                        <img src="images/logo.png" alt="logo" />
                    </a>
                </div>
                <div className="header-text">
                    <span className="black-text">Golbey, Lorraine, France</span>
                    <span className="black-text">Tuesday - Saturday from 10h to 18h</span>
                    <a href="tel: 0771072309" className="red-bg"> &#128222; 0771072309</a>
                </div> */}
            </div>
            <div className="transition" />
        </div >
    )
}

export default NavigationBar;