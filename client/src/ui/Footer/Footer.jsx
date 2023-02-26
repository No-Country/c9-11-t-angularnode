import "./Footer.css";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="footer">
      <Link to={'/admin'} className="footer__btn">Acceso administrador</Link>
    </footer>
  );
};
