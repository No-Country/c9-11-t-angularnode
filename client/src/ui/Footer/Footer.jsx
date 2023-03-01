import "./Footer.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export const Footer = () => {

  const { isAuthenticated,user } = useAuth();
  return ( isAuthenticated && user.roleName === 'ADMIN'&&
    <footer className="footer">
      <Link to={'/admin'} className="footer__btn">Acceso administrador</Link>
    </footer>
  );
};
