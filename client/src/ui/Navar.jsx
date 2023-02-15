
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import "./navar.css";

export const Navar = () => {

  
  return (
    <Navbar collapseOnSelect expand="lg" className="navar">
      <Container>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
        />
        <Navbar.Collapse id="responsive-navbar-nav" className="navar__colapsed">
          <Nav className="me-auto navar__links">
            <NavLink to="/" className="navar__links-one">
              Inicio
            </NavLink>
            <Nav className="navar__products">
              <NavLink to="products" className="navar__links-one">
                Productos
              </NavLink>
              <NavDropdown>
              <ul id="collasible-nav-dropdown" className="navar__prod-submenu">
                <li>
                  <NavLink to="products" className="navar__links-prod">Bebidas</NavLink>
                </li>
                <li>
                  <NavLink to="products" className="navar__links-prod">Comidas</NavLink>
                </li>
                <li>
                  <NavLink to="products" className="navar__links-prod">Postres</NavLink>
                </li>
                <li>
                  <NavLink to="products" className="navar__links-prod">Extras</NavLink>
                </li>
              </ul>
              </NavDropdown>
            </Nav>

            <NavLink to="contact" className="navar__links-one">
              Contacto
            </NavLink>
            <NavLink to="/" className="navar__links-one">
              Mi Perfil
            </NavLink>
          </Nav>
          <Nav className="navar__account">
            <NavLink to="login" className="navar__links-one">
              Iniciar Sesión
            </NavLink>
            <NavLink to="createAccount" className="navar__links-one">
              Crear Cuenta
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
