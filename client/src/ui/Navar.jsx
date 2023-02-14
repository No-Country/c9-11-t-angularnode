import { NavLink } from "react-router-dom";

export const Navar = () => {
  return (
    <nav className="navar">
      <ul>
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="products">Productos</NavLink>
        <NavLink to="contact">Contacto</NavLink>
      </ul>
      <ul>
        <NavLink to="login">Iniciar Sesión</NavLink>
        <NavLink to="createAccount">Crear Cuenta</NavLink>
      </ul>
    </nav>
  );
};
