import { useAuth } from "../../hooks/useAuth"
import { Grid, Typography, Card } from "@mui/material"
import LocalGroceryStoreRoundedIcon from '@mui/icons-material/LocalGroceryStoreRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import ToggleButton from '@mui/material/ToggleButton';

import { Link } from 'react-router-dom'
export const Dashboard = () => {




    const { user } = useAuth();

    //Admin Dashboard
    return (
        <Grid container direction="row" sx={{ background: 'var(--four)' }}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{ background: "linear-gradient(320deg, rgba(255,102,0,0.17690826330532217) 0%, rgba(242,150,11,0.6727065826330532) 100%), url('./src/assets/images/bg2.jpg')", backgroundSize: '150%', backgroundPosition: '50%,5%', height: '30vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h2" sx={{ color: '#fff' }}>Dashboard</Typography>
                <Typography variant="h6" sx={{ color: '#fff' }}>Hola denuevo, {user.name}</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{ background: 'var(--four)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4, height: '60vh' }}>
                <Link to="/admin/products" style={{ textDecoration: 'none' }}><ToggleButton sx={{ border: 'none', padding: 0, textTransform: 'none' }}>
                    <Card
                        className="classes.root"
                        sx={{
                            width: 200,
                            height: 200,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: 'var(--primary)',
                            color: '#fff',
                            borderRadius: 2,
                            boxShadow: 3,
                            '&:hover': {
                                boxShadow: 6,

                            },


                        }}
                    >
                        <Typography variant="h5"><LocalGroceryStoreRoundedIcon sx={{ fontSize: '2em' }} /></Typography>
                        <Typography variant="h6">Productos</Typography>
                    </Card>
                </ToggleButton></Link>

                <ToggleButton sx={{ border: 'none', padding: 0, textTransform: 'none' }}><Card

                    sx={{
                        width: 200,
                        height: 200,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'var(--primary)',
                        color: '#fff',
                        borderRadius: 2,
                        boxShadow: 3,
                        '&:hover': {
                            boxShadow: 6,

                        }
                    }}
                >
                    <Typography variant="h5"><MenuBookRoundedIcon sx={{ fontSize: '2em' }} /></Typography>
                    <Typography variant="h6">Categorías</Typography>
                </Card></ToggleButton>
                <ToggleButton sx={{ border: 'none', padding: 0, textTransform: 'none' }}><Card

                    sx={{
                        width: 200,
                        height: 200,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'var(--primary)',
                        color: '#fff',
                        borderRadius: 2,
                        boxShadow: 3,
                        '&:hover': {
                            boxShadow: 6,

                        }
                    }}
                >
                    <Typography variant="h5"><PersonRoundedIcon sx={{ fontSize: '2em' }} /></Typography>
                    <Typography variant="h6">Usuarios</Typography>
                </Card>
                </ToggleButton>




            </Grid>



        </Grid>





    )
}
