import { Avatar, Box, IconButton, Menu, MenuItem, Tooltip, Typography } from '@mui/material';
import { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useAuth, logout } from '../../hooks/useAuth';
import { Link } from 'react-router-dom';

export const UserMenu = () => {

    const { isAuthenticated, user } = useAuth();

    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const menuWithoutLogin = ['Iniciar sesión', 'Registrarse'];


    return (
        <Box sx={{ flexGrow: 0 }}>

            <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 1, color: 'var(--primary)' }}>
                    <AccountCircleIcon />
                </IconButton>
            </Tooltip>

            <Menu
                sx={{ mt: '45px' }}
                PaperProps={{
                    elevation: 5,
                    sx: {
                        background: 'var(--thirt)',
                    }
                }}
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
            >
                {isAuthenticated ? <Box sx={{}}>

                    <Typography sx={{
                        m: 2, display: 'flex',
                        textAlign: 'center',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 2,
                        background: 'var(--second)',
                        p: 1,
                        borderRadius: '4px',
                        border: '2px solid var(--primary)'
                    }}>
                        <Avatar sx={{ width: 50, height: 50 }} alt="profilePic" src={`/src/assets/profileIcon/${user.profileIcon}.png`} />
                        {user.name}</Typography>


                    {user.roleName === 'ADMIN' && <Link to={'/admin'} style={{textDecoration:'none',color:'inherit'}}> <MenuItem key={'AdminPanel'} >
                        <Typography textAlign="center">Admin Dashboard</Typography>
                    </MenuItem>
                    </Link>}

                    <Link to="/profile" style={{textDecoration:'none',color:'inherit'}}>
                        <MenuItem key={'ProfileLink'}>
                            <Typography textAlign="center">Perfil</Typography>
                        </MenuItem>
                    </Link>



                    <MenuItem key={'Logout'} onClick={logout}>
                        <Typography textAlign="center">Cerrar sesión</Typography>
                    </MenuItem>





                </Box> : (

                    <Box sx={{ background: 'var(--thirt)' }}>

                        <Link to="/login" style={{textDecoration:'none',color:'inherit'}}>

                            <MenuItem key={'Login'} onClick={handleCloseUserMenu}>
                                <Typography textAlign="center">Iniciar sesión</Typography>
                            </MenuItem>
                        </Link>
                        <Link to="/register" style={{textDecoration:'none',color:'inherit'}}>
                            <MenuItem key={"Registrarse"} onClick={handleCloseUserMenu}>
                                <Typography textAlign="center">Registrarse</Typography>
                            </MenuItem>
                        </Link>

                    </Box>)}

            </Menu>
        </Box>
    )
}
