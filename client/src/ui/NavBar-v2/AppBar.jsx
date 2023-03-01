import { useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import { Link } from "react-router-dom";
import { CartButton } from "../../components/Cart/CartButton";
import Drawer from '@mui/material/Drawer';
import logo from "../../assets/icon/logo.png";
import { UserMenu } from "./UserMenu";

const pages = [{name:'Inicio',path:'/'}, {name:'Productos',path:'/products'}, {name:'Contacto',path:'/contact'}];
const pagesMenuMobile = [{name:'Inicio',path:'/'}, {name:'Productos',path:'/products'}, {name:'Contacto',path:'/contact'}];
const sections = [{name:'Bebidas',path:'/products/Bebidas'},{name:'Comida',path:'/products/Comida'},{name: 'Postres',path:'/products/Postres'},{name:'Extras',path:'/products/Extras'}]

export const AppBarMenu = () => {

    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };


    //Lista de items menu mobile
    const list = () => (
        <Box
            sx={{ width: 300, height: '100%', background: 'var(--thirt)' }}
            role="presentation"
        >

            <Box
                sx={{ background: 'var(--second)', height: '6em' }}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="primary"
                    sx={{ mt: 3, ml: 3 }}

                >
                    <MenuIcon />
                </IconButton>
            </Box>




            <List>
                {pagesMenuMobile.map((page, index) => {


                    if (page.name === 'Productos') {
                        return (
                            <Accordion expanded={expanded} TransitionProps={{ unmountOnExit: true }} onChange={handleChange('panel1')} sx={{ border: 'none', background: 'var(--thirt)', boxShadow: 'none' }}>
                                <ListItemButton aria-controls="asd" sx={{ minHeight: '4em' }} disablePadding onClick={() => setExpanded(!expanded)}>
                                    <Typography sx={{ fontWeight: '500' }}>
                                        {page.name}
                                    </Typography>
                                </ListItemButton>

                                <AccordionDetails sx={{ border: 'none', boxShadow: 'none', margin: 0 }}>
                                    {sections.map((section) => {
                                        return (
                                            <Link to={section.path} style={{textDecoration:'none', color:'#000'}}> 
                                            <ListItem key={section} disablePadding >
                                                <ListItemButton>
                                                    <Typography sx={{ fontWeight: '500' }}>
                                                        {section.name}
                                                    </Typography>
                                                </ListItemButton>
                                            </ListItem>
                                            </Link>)
                                    })}

                                </AccordionDetails>
                            </Accordion>
                        )
                    }

                    return (<Link to={page.path} style={{textDecoration:'none', color:'#000'}}> 
                        <ListItem key={page.name+index} disablePadding >
                           
                            <ListItemButton sx={{ minHeight: '4em' }}>

                                <Typography sx={{ fontWeight: '500' }}>
                                    {page.name}
                                </Typography>
                            </ListItemButton>
                           
                        </ListItem>
                        </Link>)
                })}
            </List>


        </Box>
    );


    const [openSideMenu, setSideMenu] = useState(false);

    const handleCloseSideMenu = () => {
        setSideMenu(false);
    };

    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenNavMenu = (event) => {
        setSideMenu(!openSideMenu);
    };
  

   


    return (
        <AppBar position="static" sx={{ background: 'var(--thirt)', p: 1 }}>
            <Container maxWidth="xl" >
                <Toolbar disableGutters >


                    {/** Parte mobile */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="primary"
                        >
                            <MenuIcon />
                        </IconButton>

                        <Drawer
                            anchor={'left'}
                            open={openSideMenu}
                            onClose={handleCloseSideMenu}
                        >
                            {list('left')}
                        </Drawer>

                    </Box>

                    <Typography
                        variant="h5"
                        noWrap
                        component={Link}
                        to="/"
                        sx={{
                            m: 1,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: { xs: 4, sm: 20 },
                            alignItems:'center',
                            justifyContent:'center',
                            textAlign:'center',
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        <img src={logo} alt="icon" width={64} height={64} />
                    </Typography>

                    {/** Parte desktop */}
                    <Typography
                        noWrap
                        component={Link}
                        to="/"
                        sx={{
                            m: 1,
                            display: { xs: 'none', md: 'flex' },
                            textDecoration: 'none',
                        }}>
                        <img src={logo} alt="icon" width={64} height={64} />
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center', gap: 10 }}>


                        {pages.map((page) => 
                        
                           
                               
                                <Link to={page.path} style={{textDecoration:'none'}}>   
                                <Button key={page.name} sx={{ my: 2, color: '#000', display: 'block' }}>
                                    {page.name}
                                </Button>
                                </Link> 


                           
                        )}
                    </Box>

                    {/**Menu usuario */}
                    <CartButton/>
                  <UserMenu/>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
