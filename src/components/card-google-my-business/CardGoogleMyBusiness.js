import React, { useState } from 'react';
import './GoogleBusinessCard.css'; // Importation du fichier CSS

import exampleImageKINE1 from '../../assets/kine1.jpg';
import exampleImageKINE2 from '../../assets/kine2.jpg';
import exampleImageKINE3 from '../../assets/kine3.jpg';
import exampleImagenNaturopathe1 from '../../assets/naturopathe1.jpg';
import exampleImagenNaturopathe2 from '../../assets/naturopathe2.jpg';
import exampleImagenNaturopathe3 from '../../assets/naturopathe3.jpg';
import exampleImageRestaurant1 from '../../assets/restaurant1.jpg';
import exampleImageRestaurant2 from '../../assets/restaurant2.jpg';
import exampleImageRestaurant3 from '../../assets/restaurant3.jpg';
import exampleImage from '../../assets/download.jpg';
import exampleImage2 from '../../assets/download3.jpg';
import exampleImage1 from '../../assets/download-2.png';

function CardGoogleMyBusiness() {
  const [showAllOpeningHours, setShowAllOpeningHours] = useState(false); // État pour gérer l'affichage de tous les horaires
  const [showOnlyThreeOpeningHours, setShowOnlyThreeOpeningHours] = useState(true); // État pour gérer l'affichage des 3 premiers jours de la semaine

  // Déplacer la déclaration de openingHours en dehors de la fonction renderOpeningHours
  const openingHours = [
    { day: "Lundi", hours: "08h00 - 18h00", crowdLevel: "Moyen" },
    { day: "Mardi", hours: "08h00 - 18h00", crowdLevel: "Faible" },
    { day: "Mercredi", hours: "08h00 - 18h00", crowdLevel: "Élevé" },
    { day: "Jeudi", hours: "08h00 - 20h00", crowdLevel: "Élevé" },
    { day: "Vendredi", hours: "08h00 - 20h00", crowdLevel: "Élevé" },
    { day: "Samedi", hours: "09h00 - 22h00", crowdLevel: "Faible" },
    { day: "Dimanche", hours: "Fermé", crowdLevel: "Faible" }
  ];

  // Fonction pour afficher les heures d'ouverture
  const renderOpeningHours = () => {
    if (showAllOpeningHours) {
      return (
        <div className="opening-hours">
          <h3>Horaires d'ouverture :</h3>
          <ul>
            {openingHours.map(({ day, hours }) => (
              <li key={day}>
                {day} : {hours}
              </li>
            ))}
          </ul>
        </div>
      );
    } else if (showOnlyThreeOpeningHours) {
      const firstThreeDays = openingHours.slice(0, 3);
      return (
        <div className="opening-hours">
          <h3>Horaires d'ouverture :</h3>
          <ul>
            {firstThreeDays.map(({ day, hours }) => (
              <li key={day}>
                {day} : {hours}
              </li>
            ))}
          </ul>
        </div>
      );
    }
    return null;
  };
  return (
    <div className="google-business-card-container">
    <div className="google-business-card-small">
      <div className="thumbnails">
        <img src={exampleImageKINE1} alt="Thumbnail 1" />
        <img src={exampleImageKINE2} alt="Thumbnail 2" />
        <img src={exampleImageKINE3} alt="Thumbnail 3" />
      </div>
      <h2>Kiné Marseille 8ème</h2>
      <p>
        📍 Adresse : 123 Avenue Michelet, 13008 Marseille, France <br />
        📞 Téléphone : +33 06 13 45 57 69 <br />
        🌐 Site web : <a href="https://www.kine-marseille.com">www.kine-marseille.com</a>
      </p>
      <button className="expand-button" onClick={() => {
        setShowAllOpeningHours(!showAllOpeningHours);
        setShowOnlyThreeOpeningHours(!showOnlyThreeOpeningHours);
      }}>
        {showAllOpeningHours ? 'Cacher les horaires' : 'Afficher les horaires'}
      </button>
      {renderOpeningHours()}
      <div className="crowd-level">
        <h3>Niveau d'affluence :</h3>
        <div className="progress-bars-container-1 progress-bars">
          {openingHours.map(({ day, crowdLevel }) => (
            <div key={day} className={`progress-bar progress-bar-${crowdLevel.toLowerCase()}`}></div>
          ))}
        </div>
      </div>
      <div className="reviews">
  <h3>Avis (56) :</h3>
  <div className="review">
    <div className="profile">
      <img src={exampleImage} alt="Photo de profil" className="profile-pic" />
      <span className="name">BapMartin</span>
    </div>
    <div className="review-text">
      <span className="rating">★★★★★</span>
      <p>"Meilleur kiné du sport de Marseille, elle prend le temps et reste à l'écoute."</p>
    </div>
  </div>
  {/* Ajoutez d'autres avis ici */}
</div>
    </div>
    <div className="google-business-card-small">
      <div className="thumbnails">
        <img src={exampleImageRestaurant1} alt="Thumbnail 1" />
        <img src={exampleImageRestaurant2} alt="Thumbnail 2" />
        <img src={exampleImageRestaurant3} alt="Thumbnail 3" />
      </div>
      <h2>Café de la Place</h2>
      <p>
        📍 Adresse : 78 Rue de la République, 75001 Paris, France <br />
        📞 Téléphone : +33 1 23 45 67 89 <br />
        🌐 Site web : <a href="https://www.cafedelaplace.com">www.cafedelaplace.com</a>
      </p>
      <button className="expand-button" onClick={() => {
        setShowAllOpeningHours(!showAllOpeningHours);
        setShowOnlyThreeOpeningHours(!showOnlyThreeOpeningHours);
      }}>
        {showAllOpeningHours ? 'Cacher les horaires' : 'Afficher les horaires'}
      </button>
      {renderOpeningHours()}
      <div className="crowd-level">
        <h3>Niveau d'affluence :</h3>
        <div className="progress-bars-container-2 progress-bars">
          {openingHours.map(({ day, crowdLevel }) => (
            <div key={day} className={`progress-bar progress-bar-${crowdLevel.toLowerCase()}`}></div>
          ))}
        </div>
      </div>
      <div className="reviews">
        <h3>Avis (237) :</h3>
        <div className="review">
    <div className="profile">
      <img src={exampleImage2} alt="Photo de profil" className="profile-pic" />
      <span className="name">Hèlène</span>
    </div>
    <div className="review-text">
      <span className="rating">★★★★★</span>
      <p>"Top restaurant du 75001, le plat du jour est excellent et rapide. Le dessert aux pistaches est fabuleux"</p>
    </div>
  </div>
        {/* Ajoutez d'autres avis ici */}
      </div>
    </div>
    <div className="google-business-card-small">
      <div className="thumbnails">
      <img src={exampleImagenNaturopathe1} alt="Thumbnail 1" />
        <img src={exampleImagenNaturopathe2} alt="Thumbnail 2" />
        <img src={exampleImagenNaturopathe3} alt="Thumbnail 3" />
      </div>
      <h2>Naturopathe Montélimar</h2>
      <p>
        📍 Adresse : 18 Rue de la Mairie, 26200 Montélimar, France <br />
        📞 Téléphone : +33 1 23 45 67 89 <br />
        🌐 Site web : <a href="https://www.naturopathe-montélimar.com">www.naturopathe-montélimar.com</a>
      </p>
      <button className="expand-button" onClick={() => {
        setShowAllOpeningHours(!showAllOpeningHours);
        setShowOnlyThreeOpeningHours(!showOnlyThreeOpeningHours);
      }}>
        {showAllOpeningHours ? 'Cacher les horaires' : 'Afficher les horaires'}
      </button>
      {renderOpeningHours()}
      <div className="crowd-level">
        <h3>Niveau d'affluence :</h3>
        <div className="progress-bars-container-3 progress-bars">
          {openingHours.map(({ day, crowdLevel }) => (
            <div key={day} className={`progress-bar progress-bar-${crowdLevel.toLowerCase()}`}></div>
          ))}
        </div>
      </div>
      <div className="reviews">
        <h3>Avis (237) :</h3>
        <div className="review">
    <div className="profile">
    <img src={exampleImage1} alt="Photo de profil" className="profile-pic" />
      <span className="name">Marine</span>
    </div>
    <div className="review-text">
      <span className="rating">★★★★★</span>
      <p>"Naturopathe à l'écoute, répond à mes attentes, je vous la recommande"</p>
    </div>
  </div>
        {/* Ajoutez d'autres avis ici */}
      </div>
    </div>
    
    </div>
  );
}

export default CardGoogleMyBusiness;


