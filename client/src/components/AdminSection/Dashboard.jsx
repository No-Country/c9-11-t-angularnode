import { useAuth } from "../../hooks/useAuth";
import LocalGroceryStoreRoundedIcon from '@mui/icons-material/LocalGroceryStoreRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import { Link } from 'react-router-dom';
import './Dashboard.css';

export const Dashboard = () => {
    const { user } = useAuth();

    return (
        <div className="dashboardContainer">
            <div className="welcomeContainer">
                <h2>Dashboard</h2>
                <h5>{`Hola de nuevo ${user.name}`}</h5>
            </div>

            <div className="cardContainer">
                <div className="itemCard">
                    <Link to="/admin/products" style={{ textDecoration: 'none' }} className="link">
                        <LocalGroceryStoreRoundedIcon sx={{ fontSize: '2em' }} />
                        <span>Productos</span>
                    </Link>
                </div>

                <div className="itemCard">
                    <Link to="/admin/categories" style={{ textDecoration: 'none' }} className="link">
                        <MenuBookRoundedIcon sx={{ fontSize: '2em' }} />
                        <span>Categorías</span>
                    </Link>
                </div>

                <div className="itemCard">
                    <Link to="/admin/users" style={{ textDecoration: 'none' }} className="link">
                        <PersonRoundedIcon sx={{ fontSize: '2em' }} />
                        <span>Usuarios</span>
                    </Link>
                </div>
            </div>

        </div>
    );
}
