import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <div className="app-header">
        <div className="header-image">
          <a href="/">
            <img src="images/logo.png" alt="logo" />
          </a>
        </div>
        <div className="header-text">
          <span className="black-text">Golbey, Lorraine, France</span>
          <span className="black-text">Tuesday - Saturday from 10h to 18h</span>
          <a href="tel: 581-745-8680" className="red-bg"> &#128222; 581-745-8680</a>
        </div>
      </div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="contact" element={< Contact />} />
        </Routes>
      </BrowserRouter>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="images/logo-footer.png" alt="Footer Logo" />
          </div>
          <div className="footer-links">
            {/* <a href="/about">About Us</a>
            <a href="/services">Services</a>
            <a href="/contact">Contact Us</a> */}
          </div>
        </div>
      </footer>

    </div>
  );
}

function Main() {
  // const navigate = useNavigate();
  // const handleNavigation = () => {
  //   navigate("https://www.facebook.com/profile.php?id=61550872804595")
  // }

  return (
    <body className='body'>
      <div className='app-video'>
        <video src="videos/bg.mp4" className="video-header" autoPlay loop muted />
        <div className="text-overlay">
          <h1>
            L’ART DE LA
            <span className="red-text"> PERFORMANCE</span><br />REPROGRAMMATION TOUS MOTEURS</h1>
          <br />
          <a href="mailto:contact@lkreprogrammation.fr">
            <button className='button' /* onClick={handleNavigation} */ >Contactez-nous</button></a>
        </div>
      </div>
      <div className='bg-image-container'>
        <img src="images/bg-3.jpg" alt="driving car"
          className='background-image' />

        {/* CATEGORIES */}
        <div className='tri-service'>
          <div className='panel-service'>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
            <span className="material-symbols-outlined panel-icon">
              settings_applications
            </span>
            <h3>Service</h3>
            <p className='text-small'>Vous souhaitez améliorer les performances de votre véhicule en réglant votre calculateur? Nous sommes le professionnel du réglage automatique que vous recherchiez.
            </p>
          </div>
          <div className='panel-service'>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
            <span className="material-symbols-outlined panel-icon">
              blur_on
            </span>
            <h3>Tuning</h3>
            <p className='text-small'>Notre équipe d'experts en reprogrammation moteur est là pour libérer le véritable potentiel de votre véhicule. Grâce à notre expertise en matière de reprogrammation moteur, nous pouvons ajuster finement les paramètres de votre moteur pour un maximum de puissance et de réactivité.
            </p>
          </div>
          <div className='panel-service'>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
            <span className="material-symbols-outlined panel-icon">
              moving
            </span>
            <h3>Performance</h3>
            <p className='text-small'>Gagnez facilement en vitesse et en couple. Qu'il s'agisse d'une voiture de sport pour les circuits ou d'un véhicule plus classique, nous avons des solutions qui répondent à vos attentes.
            </p>
          </div>
        </div>


        {/* CONTACT INFO */}
        <div className='contact-section'>
          <h2 >Où nous trouver</h2>
          <p>Facebook Page: <a className="href-link" href="https://www.facebook.com/profile.php?id=61550872804595">Visit Our Facebook Page</a>
          </p>
          <p>Téléphone: <a className="href-link" href="tel:0771072309">0771072309</a>
          </p>
          <p>
            Email: <a className="href-link" href="mailto:contact@lkreprogrammation.fr">contact@lkreprogrammation.fr</a>
          </p>
        </div>
      </div>
    </body >
  );
}

export default App;