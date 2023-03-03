import React from "react";
import contactIcon from "../assets/icon/contactIcon.svg";
import locationIcon from "../assets/icon/locationIcon.svg";
import whatsappIcon from "../assets/icon/whatsappIcon.svg";
import instagramIcon from "../assets/icon/instagramIcon.svg";
import emailIcon from "../assets/icon/emailIcon.svg";
import logoUrbanFood from "../assets/icon/logo.png";
import './styles/contact.css';
import { Map } from "../components/Contact/Map";

export const Contact = () => {
  return (
    <div className="contactContainer">
      <div className="contactHeader">
        <img src={ contactIcon } alt="contact icon" />
        <h4>Contacto</h4>
      </div>

      <div className="contactSection">
      <div className="firstContactSection">
        <div className="locationContainer">
          <div className="locationHeader">
            <img src={ locationIcon } alt="location icon" />
            <p>Ubicación: </p>
            <p className="addressData"> Av. San Martín 1235</p>
          </div>

          <div className="mapContainer">
            <Map></Map>
          </div>
        </div>

        <div className="iconContainer">
          <a href=""><img src={ whatsappIcon } alt="WhatsApp contact" /><span>WhatsApp</span></a>
          <a href=""><img src={ instagramIcon } alt="WhatsApp contact" /><span>Instagram</span></a>
          <a href=""><img src={ emailIcon } alt="WhatsApp contact" /><span>Mail</span></a>
        </div>
      </div>
      

      <div className="logoContainer">
          <img className='logoUrbanFood' src={ logoUrbanFood } alt="Logo Urban Food" />
      </div>
      </div>
    </div>
  )
}