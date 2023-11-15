import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import "./tailwind.css";
import "./App.css";

function App() {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("reservation")
  }

  return (
    <body className='body'>
      <div className='app-video'>
        <video src="videos/bg.mp4" className="video-header" autoPlay loop muted />
        <div className="text-overlay">
          <h1 className='text-2xl md:text-5xl font-bold'>
            L’ART DE LA
            <span className="red-text"> PERFORMANCE</span><br />REPROGRAMMATION TOUS MOTEURS</h1>
          <br />
          <button className='lg:mt-4 p-2 px-4 lg:p-6 lg:px-9 button text-base md:text-2xl' onClick={handleNavigation}>Faire une réservation</button>
        </div>
      </div>
      <div className='bg-image-container'>
        <img src="images/bg-3.jpg" alt="driving car"
          className='background-image' />

        {/* CATEGORIES */}
        <div className='flex-col md:flex-row tri-service m-4 md:m-5'>
          <div className='panel-service m-1 md:m-5'>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
            <span className="material-symbols-outlined panel-icon mb-1">
              settings_applications
            </span>
            <h3 className='text-lg font-medium mb-2'>Service</h3>
            <p className='text-small'>Vous souhaitez améliorer les performances de votre véhicule en réglant votre calculateur? Nous sommes le professionnel du réglage automatique que vous recherchiez.
            </p>
          </div>
          <div className='panel-service m-1 md:m-5'>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
            <span className="material-symbols-outlined panel-icon mb-1">
              blur_on
            </span>
            <h3 className='text-lg font-medium mb-2'>Tuning</h3>
            <p className='text-small'>Notre équipe d'experts en reprogrammation moteur est là pour libérer le véritable potentiel de votre véhicule. Grâce à notre expertise en matière de reprogrammation moteur, nous pouvons ajuster finement les paramètres de votre moteur pour un maximum de puissance et de réactivité.
            </p>
          </div>
          <div className='panel-service m-1 md:m-5'>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
            <span className="material-symbols-outlined panel-icon mb-1">
              moving
            </span>
            <h3 className='text-lg font-medium mb-2'>Performance</h3>
            <p className='text-small'>Gagnez facilement en vitesse et en couple. Qu'il s'agisse d'une voiture de sport pour les circuits ou d'un véhicule plus classique, nous avons des solutions qui répondent à vos attentes.
            </p>
          </div>
        </div>


        {/* CONTACT INFO */}
        <div className='contact-section m-7 md:m-[90px]'>
          <h2 className='text-xl font-bold mb-2'>Où nous trouver</h2>
          <p>Facebook Page: <a className="href-link" href="https://www.facebook.com/profile.php?id=61550872804595">Visitez notre page Facebook</a>
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