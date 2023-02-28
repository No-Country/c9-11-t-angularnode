import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, NavLink } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";


import logo from "../assets/icon/logo.png";
import burger from "../assets/icon/burger.png";

import "./navar.css";
import { useAccordionButton } from "react-bootstrap";
import { UserSection } from "./NavBar/UserSection";
import { CartButton } from "../components/Cart/CartButton";

function NavProducts({ eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log("totally custom!")
  );

  return (
    <button className="buttonProd" type="button" onClick={decoratedOnClick}>
      Productos
    </button>
  );
}

const categories = ["Bebidas", "Comida", "Postres", "Extras"];

const NavProductsItems = ({ eventKey }) => {
  return (
    <Accordion >
      <NavProducts eventKey={eventKey} />
      <Accordion.Collapse eventKey={eventKey}>
        <ul className="navbar__product__list prod">
          {categories.map((category, index) => {
            return (
              <li className="navbar__product__item prod" key={index}>
                <NavLink to={`/products/${category}`} className="link">
                  {category}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </Accordion.Collapse>
    </Accordion>
  );
};

const ButtonBurger = () => {
  return (
    <Navbar.Toggle
      aria-controls="responsive-navbar-nav"
      style={{ border: "none" }}
    >
      <button arial-aria-controls="responsive-navbar-nav" className="burger">
        <img src={burger} alt="burger button" width={24} height={24} />
      </button>
    </Navbar.Toggle>
  );
};

export const Navar = () => {
  return (
    <>
      <Navbar style={{ padding: 0, zIndex: 10 }} collapseOnSelect expand="none">
        <div className="navbar__container">
          <ButtonBurger />
          <Link to={"/"}>
            <img src={logo} alt="icon" width={64} height={64} />
          </Link>

          
         <CartButton/>
       
          <Navbar.Collapse id="responsive-navbar-nav" className=" navar__collapse ">
          <Nav className="navbar__container__header__collapse">
            <ButtonBurger />
          </Nav>

          <Nav className="navbar__container__main__collapse">
            <ul className="navbar__list">
              <li className="navbar__list__item">
                <NavLink to="/" className="link">
                  Inicio
                </NavLink>
              </li>
              <li className="navbar__list__item">
                <NavProductsItems eventKey="0" />
              </li>
              <li className="navbar__list__item">
                <NavLink to="contact" className="link">
                  Contacto
                </NavLink>
              </li>
              <li className="navbar__list__item">
                <NavLink to="profile" className="link">
                  Perfil
                </NavLink>
              </li>
            </ul>
          </Nav>

          <UserSection/>
        </Navbar.Collapse>
       
       
        </div>
        
      </Navbar>
    </>
  );
};
