import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth, logout } from '../../hooks/useAuth'
import Stack from 'react-bootstrap/Stack'

export const UserSection = () => {

    const { isAuthenticated, user } = useAuth();

    return (<div className="navbar__container__footer__collapse">
        {isAuthenticated ? <>

            <Stack direction="horizontal" gap={3}>
                
                <div>Hola {user.name}! </div>
                <img src={`/src/assets/profileIcon/${user.profileIcon}.png`} height={50} alt="profilePic" /> 
                <NavLink to="profile" className="link">
                    Perfil 
                </NavLink>
                <NavLink onClick={logout} className="link">
                    Cerrar Sesión
                </NavLink>
            </Stack>
        </> : (<>
            <NavLink to="login" className="link">
                Iniciar sesión
            </NavLink>
            <span className="link">|</span>{" "}
            <NavLink to="register" className="link">
                Crear cuenta
            </NavLink>
            
        </>)
        }
    </div>
    )
}
